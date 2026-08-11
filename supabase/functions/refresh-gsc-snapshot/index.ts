import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SITE_URL = "sc-domain:financesalbertem.cz";
const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";

const KEYWORD_GROUPS = [
  {
    name: "Hypotéky Liberec",
    matchers: [/hypot[eé]k/i, /hypot[eé]ka/i, /refinancov[aá]n[ií]/i],
  },
  {
    name: "Pojištění Liberec",
    matchers: [/poji[sš][tť][ěe]n/i, /poji[sš][ťt]ov/i],
  },
  {
    name: "Investice Liberec",
    matchers: [/invest/i, /portfolio/i, /výnos/i],
  },
  {
    name: "Reality Liberec",
    matchers: [/realit/i, /nemovitost/i, /byt/i, /dům/i, /pronájem/i],
  },
  {
    name: "Finanční poradenství Liberec",
    matchers: [/finan[čc]n[ií]/i, /porad/i, /poradenstv/i, /4fin/i],
  },
];

interface GscRow {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

function getDateRange(daysBack: number) {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - daysBack);
  const fmt = (d: Date) => d.toISOString().split("T")[0];
  return { startDate: fmt(start), endDate: fmt(end) };
}

async function queryGsc(
  dimensions: string[],
  rowLimit: number,
  env: Record<string, string | undefined>
): Promise<GscRow[]> {
  const { startDate, endDate } = getDateRange(28);
  const body = {
    startDate,
    endDate,
    dimensions,
    rowLimit,
    startRow: 0,
  };

  const response = await fetch(
    `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": env.GOOGLE_SEARCH_CONSOLE_API_KEY || "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GSC query failed [${response.status}]: ${text}`);
  }

  const data = await response.json();
  return (data.rows || []) as GscRow[];
}

function aggregateKeywordGroups(rows: GscRow[]) {
  const groups = KEYWORD_GROUPS.map((g) => ({
    name: g.name,
    clicks: 0,
    impressions: 0,
    positionSum: 0,
    positionCount: 0,
  }));

  for (const row of rows) {
    const query = row.keys[0].toLowerCase();
    for (const group of groups) {
      const def = KEYWORD_GROUPS.find((k) => k.name === group.name);
      if (def?.matchers.some((m) => m.test(query))) {
        group.clicks += row.clicks;
        group.impressions += row.impressions;
        group.positionSum += row.position * row.impressions;
        group.positionCount += row.impressions;
      }
    }
  }

  return groups
    .filter((g) => g.impressions > 0)
    .map((g) => ({
      dimension_value: g.name,
      clicks: g.clicks,
      impressions: g.impressions,
      ctr: g.impressions > 0 ? Number((g.clicks / g.impressions).toFixed(5)) : 0,
      position: g.positionCount > 0 ? Number((g.positionSum / g.positionCount).toFixed(2)) : 0,
    }));
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const env = {
      LOVABLE_API_KEY: Deno.env.get("LOVABLE_API_KEY"),
      GOOGLE_SEARCH_CONSOLE_API_KEY: Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY"),
      SUPABASE_URL: Deno.env.get("SUPABASE_URL"),
      SUPABASE_ANON_KEY: Deno.env.get("SUPABASE_ANON_KEY"),
    };

    if (!env.LOVABLE_API_KEY || !env.GOOGLE_SEARCH_CONSOLE_API_KEY) {
      throw new Error("Missing Search Console gateway credentials");
    }
    if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) {
      throw new Error("Missing Supabase credentials");
    }

    const authHeader = req.headers.get("authorization");
    const jwt = authHeader?.replace("Bearer ", "");
    if (!jwt) {
      return new Response(
        JSON.stringify({ success: false, error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const authClient = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
      auth: { persistSession: false },
    });

    const { data: userData, error: userError } = await authClient.auth.getUser(jwt);
    if (userError || !userData.user) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid token" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { data: isAdmin, error: roleError } = await authClient.rpc("has_role", {
      _user_id: userData.user.id,
      _role: "admin",
    });

    if (roleError || !isAdmin) {
      return new Response(
        JSON.stringify({ success: false, error: "Forbidden" }),
        { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const userClient = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
      global: {
        headers: { Authorization: `Bearer ${jwt}` },
      },
    });

    const today = new Date().toISOString().split("T")[0];

    // For manual refresh, delete existing snapshots for today
    await userClient.from("gsc_snapshots").delete().eq("snapshot_date", today);

    // Fetch site summary
    const summaryRows = await queryGsc([], 1, env);
    const summary = summaryRows[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };

    // Fetch queries
    const queryRows = await queryGsc(["query"], 500, env);

    // Fetch pages
    const pageRows = await queryGsc(["page"], 100, env);

    // Aggregate keyword groups
    const groupRows = aggregateKeywordGroups(queryRows);

    // Prepare inserts
    const inserts: Record<string, unknown>[] = [
      {
        snapshot_date: today,
        site_url: SITE_URL,
        dimension_type: "site",
        dimension_value: "Celkový výkon",
        clicks: summary.clicks,
        impressions: summary.impressions,
        ctr: summary.ctr,
        position: summary.position,
      },
      ...queryRows.map((r) => ({
        snapshot_date: today,
        site_url: SITE_URL,
        dimension_type: "query",
        dimension_value: r.keys[0],
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: r.ctr,
        position: r.position,
      })),
      ...pageRows.map((r) => ({
        snapshot_date: today,
        site_url: SITE_URL,
        dimension_type: "page",
        dimension_value: r.keys[0],
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: r.ctr,
        position: r.position,
      })),
      ...groupRows.map((r) => ({
        snapshot_date: today,
        site_url: SITE_URL,
        dimension_type: "keyword_group",
        dimension_value: r.dimension_value,
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: r.ctr,
        position: r.position,
      })),
    ];

    const { error } = await userClient.from("gsc_snapshots").insert(inserts);
    if (error) throw error;

    return new Response(
      JSON.stringify({
        success: true,
        refreshedAt: new Date().toISOString(),
        summary: {
          clicks: summary.clicks,
          impressions: summary.impressions,
          ctr: summary.ctr,
          position: summary.position,
        },
        queries: queryRows.length,
        pages: pageRows.length,
        keywordGroups: groupRows.length,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in refresh-gsc-snapshot:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
