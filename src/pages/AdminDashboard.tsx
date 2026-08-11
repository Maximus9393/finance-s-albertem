import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { User, Session } from '@supabase/supabase-js';
import { LogOut, RefreshCw, TrendingUp, TrendingDown, Minus, Search, MousePointer, Eye, BarChart3 } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string | null;
  referral_source: string;
  created_at: string;
}

interface GscSnapshot {
  id: string;
  snapshot_date: string;
  dimension_type: 'site' | 'query' | 'page' | 'keyword_group';
  dimension_value: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface SnapshotComparison {
  current: number;
  previous: number;
  change: number;
  changePercent: number;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState("contacts");
  
  const [snapshots, setSnapshots] = useState<GscSnapshot[]>([]);
  const [isSeoLoading, setIsSeoLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<string | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session?.user) {
          navigate('/auth');
        } else {
          setTimeout(() => {
            checkAdminStatus(session.user.id);
          }, 0);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        navigate('/auth');
      } else {
        checkAdminStatus(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminStatus = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .rpc('has_role', { _user_id: userId, _role: 'admin' });
      
      if (error) {
        console.error('Error checking admin status:', error);
        toast({
          title: "Chyba oprávnění",
          description: "Nepodařilo se ověřit vaše oprávnění.",
          variant: "destructive"
        });
        navigate('/');
        return;
      }

      if (!data) {
        toast({
          title: "Přístup odepřen",
          description: "Nemáte oprávnění pro přístup k administraci.",
          variant: "destructive"
        });
        navigate('/');
        return;
      }

      setIsAdmin(true);
      fetchContacts();
      fetchSeoSnapshots();
    } catch (error) {
      console.error('Error:', error);
      navigate('/');
    }
  };

  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContacts(data || []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      toast({
        title: "Chyba",
        description: "Nepodařilo se načíst kontakty.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSeoSnapshots = async () => {
    setIsSeoLoading(true);
    try {
      const { data, error } = await supabase
        .from('gsc_snapshots')
        .select('*')
        .order('snapshot_date', { ascending: false })
        .limit(2000);

      if (error) throw error;
      setSnapshots((data || []) as GscSnapshot[]);
      if (data && data.length > 0) {
        setLastRefresh(data[0].snapshot_date);
      }
    } catch (error) {
      console.error('Error fetching SEO snapshots:', error);
      toast({
        title: "Chyba",
        description: "Nepodařilo se načíst SEO data.",
        variant: "destructive"
      });
    } finally {
      setIsSeoLoading(false);
    }
  };

  const handleRefreshGsc = async () => {
    setIsRefreshing(true);
    try {
      const { data, error } = await supabase.functions.invoke('refresh-gsc-snapshot', {
        body: { manual: true },
      });

      if (error) {
        const details = error instanceof Error ? error.message : String(error);
        throw new Error(details);
      }

      if (!data.success) {
        throw new Error(data.error || 'Neznámá chyba');
      }

      toast({
        title: "Data aktualizována",
        description: `Clicks: ${data.summary.clicks}, Impressions: ${data.summary.impressions}`,
      });
      await fetchSeoSnapshots();
    } catch (error: any) {
      console.error('Error refreshing GSC:', error);
      toast({
        title: "Chyba aktualizace",
        description: error.message || "Nepodařilo se aktualizovat data z Search Console.",
        variant: "destructive"
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const getLatestSnapshotsByType = (type: GscSnapshot['dimension_type']) => {
    const latestDate = snapshots.length > 0 ? snapshots[0].snapshot_date : null;
    if (!latestDate) return [];
    return snapshots.filter(s => s.snapshot_date === latestDate && s.dimension_type === type);
  };

  const getPreviousSnapshotsByType = (type: GscSnapshot['dimension_type']) => {
    const dates = [...new Set(snapshots.map(s => s.snapshot_date))].sort().reverse();
    if (dates.length < 2) return [];
    return snapshots.filter(s => s.snapshot_date === dates[1] && s.dimension_type === type);
  };

  const getMetricComparison = (type: GscSnapshot['dimension_type'], value: string, metric: 'clicks' | 'impressions' | 'position' | 'ctr'): SnapshotComparison => {
    const currentRows = getLatestSnapshotsByType(type);
    const previousRows = getPreviousSnapshotsByType(type);
    
    const current = currentRows.find(r => r.dimension_value === value)?.[metric] || 0;
    const previous = previousRows.find(r => r.dimension_value === value)?.[metric] || 0;
    const change = current - previous;
    const changePercent = previous !== 0 ? (change / previous) * 100 : current > 0 ? 100 : 0;
    
    return { current, previous, change, changePercent };
  };

  const siteSummary = getLatestSnapshotsByType('site').find(s => s.dimension_value === 'Celkový výkon');
  const keywordGroups = getLatestSnapshotsByType('keyword_group').sort((a, b) => b.clicks - a.clicks);
  const topQueries = getLatestSnapshotsByType('query').sort((a, b) => b.clicks - a.clicks).slice(0, 20);
  const topPages = getLatestSnapshotsByType('page').sort((a, b) => b.clicks - a.clicks).slice(0, 15);

  const formatNumber = (n: number) => new Intl.NumberFormat('cs-CZ').format(n);
  const formatPercent = (n: number) => `${(n * 100).toFixed(1)}%`;
  const formatPosition = (n: number) => n > 0 ? n.toFixed(1) : '-';

  const TrendIndicator = ({ current, previous, change, changePercent, lowerIsBetter = false }: SnapshotComparison & { lowerIsBetter?: boolean }) => {
    const isPositive = lowerIsBetter ? change < 0 : change > 0;
    const isNeutral = change === 0;
    
    if (isNeutral) return <Minus className="h-4 w-4 text-muted-foreground" />;
    
    return isPositive ? (
      <span className="flex items-center text-green-500 text-sm">
        <TrendingUp className="h-4 w-4 mr-1" />
        {changePercent > 0 && `+${changePercent.toFixed(1)}%`}
      </span>
    ) : (
      <span className="flex items-center text-red-500 text-sm">
        <TrendingDown className="h-4 w-4 mr-1" />
        {changePercent !== 0 && `${changePercent.toFixed(1)}%`}
      </span>
    );
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Administrace</h1>
            <p className="text-muted-foreground">Přehled kontaktů a SEO výkonu</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Odhlásit se
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full sm:w-auto grid-cols-2">
            <TabsTrigger value="contacts">Kontakty</TabsTrigger>
            <TabsTrigger value="seo">SEO Search Console</TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kontakty</CardTitle>
                <CardDescription>
                  Celkem {contacts.length} kontaktů
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <p>Načítání...</p>
                ) : contacts.length === 0 ? (
                  <p className="text-muted-foreground">Zatím žádné kontakty</p>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Jméno</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Telefon</TableHead>
                          <TableHead>Služba</TableHead>
                          <TableHead>Zpráva</TableHead>
                          <TableHead>Zdroj</TableHead>
                          <TableHead>Datum</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contacts.map((contact) => (
                          <TableRow key={contact.id}>
                            <TableCell className="font-medium">{contact.name}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.phone || '-'}</TableCell>
                            <TableCell>{contact.service || '-'}</TableCell>
                            <TableCell className="max-w-xs truncate">
                              {contact.message || '-'}
                            </TableCell>
                            <TableCell>{contact.referral_source}</TableCell>
                            <TableCell>
                              {new Date(contact.created_at).toLocaleDateString('cs-CZ')}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seo" className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">Výkon ve vyhledávání</h2>
                <p className="text-muted-foreground">
                  {lastRefresh ? `Poslední aktualizace: ${new Date(lastRefresh).toLocaleDateString('cs-CZ')}` : 'Žádná data'}
                </p>
              </div>
              <Button onClick={handleRefreshGsc} disabled={isRefreshing}>
                <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'Aktualizuji...' : 'Aktualizovat z GSC'}
              </Button>
            </div>

            {isSeoLoading ? (
              <p>Načítání SEO dat...</p>
            ) : snapshots.length === 0 ? (
              <Card>
                <CardContent className="py-8">
                  <div className="text-center space-y-4">
                    <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Zatím nejsou k dispozici žádná data z Google Search Console.
                      Klikněte na "Aktualizovat z GSC" pro stažení prvního snapshotu.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription className="flex items-center gap-2">
                        <MousePointer className="h-4 w-4" /> Kliknutí
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{formatNumber(siteSummary?.clicks || 0)}</div>
                      {siteSummary && (
                        <TrendIndicator {...getMetricComparison('site', 'Celkový výkon', 'clicks')} />
                      )}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription className="flex items-center gap-2">
                        <Eye className="h-4 w-4" /> Imprese
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{formatNumber(siteSummary?.impressions || 0)}</div>
                      {siteSummary && (
                        <TrendIndicator {...getMetricComparison('site', 'Celkový výkon', 'impressions')} />
                      )}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription className="flex items-center gap-2">
                        <Search className="h-4 w-4" /> Průměrná pozice
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{formatPosition(siteSummary?.position || 0)}</div>
                      {siteSummary && (
                        <TrendIndicator {...getMetricComparison('site', 'Celkový výkon', 'position')} lowerIsBetter />
                      )}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4" /> CTR
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{formatPercent(siteSummary?.ctr || 0)}</div>
                      {siteSummary && (
                        <TrendIndicator {...getMetricComparison('site', 'Celkový výkon', 'ctr')} />
                      )}
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Výkon podle témat (Liberec)</CardTitle>
                    <CardDescription>
                      Seskupené klíčové fráze pro sledovaná témata
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {keywordGroups.length === 0 ? (
                      <p className="text-muted-foreground">Žádná data pro sledovaná témata</p>
                    ) : (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Téma</TableHead>
                              <TableHead className="text-right">Kliknutí</TableHead>
                              <TableHead className="text-right">Imprese</TableHead>
                              <TableHead className="text-right">CTR</TableHead>
                              <TableHead className="text-right">Prům. pozice</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {keywordGroups.map((group) => {
                              const clicksComp = getMetricComparison('keyword_group', group.dimension_value, 'clicks');
                              return (
                                <TableRow key={group.dimension_value}>
                                  <TableCell className="font-medium">{group.dimension_value}</TableCell>
                                  <TableCell className="text-right">
                                    <div className="flex flex-col items-end">
                                      <span>{formatNumber(group.clicks)}</span>
                                      <TrendIndicator {...clicksComp} />
                                    </div>
                                  </TableCell>
                                  <TableCell className="text-right">{formatNumber(group.impressions)}</TableCell>
                                  <TableCell className="text-right">{formatPercent(group.ctr)}</TableCell>
                                  <TableCell className="text-right">{formatPosition(group.position)}</TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Top dotazy</CardTitle>
                      <CardDescription>
                        Nejčastější vyhledávací dotazy vedoucí na web
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {topQueries.length === 0 ? (
                        <p className="text-muted-foreground">Žádná data o dotazech</p>
                      ) : (
                        <div className="overflow-x-auto max-h-[500px]">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Dotaz</TableHead>
                                <TableHead className="text-right">Kliknutí</TableHead>
                                <TableHead className="text-right">Imprese</TableHead>
                                <TableHead className="text-right">Pozice</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {topQueries.map((q) => (
                                <TableRow key={q.id}>
                                  <TableCell className="font-medium max-w-xs truncate">{q.dimension_value}</TableCell>
                                  <TableCell className="text-right">{formatNumber(q.clicks)}</TableCell>
                                  <TableCell className="text-right">{formatNumber(q.impressions)}</TableCell>
                                  <TableCell className="text-right">{formatPosition(q.position)}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Top stránky</CardTitle>
                      <CardDescription>
                        Stránky s nejvíce kliknutími z vyhledávání
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {topPages.length === 0 ? (
                        <p className="text-muted-foreground">Žádná data o stránkách</p>
                      ) : (
                        <div className="overflow-x-auto max-h-[500px]">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Stránka</TableHead>
                                <TableHead className="text-right">Kliknutí</TableHead>
                                <TableHead className="text-right">Imprese</TableHead>
                                <TableHead className="text-right">Pozice</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {topPages.map((p) => (
                                <TableRow key={p.id}>
                                  <TableCell className="font-medium max-w-xs truncate">
                                    {p.dimension_value.replace('https://financesalbertem.cz', '')}
                                  </TableCell>
                                  <TableCell className="text-right">{formatNumber(p.clicks)}</TableCell>
                                  <TableCell className="text-right">{formatNumber(p.impressions)}</TableCell>
                                  <TableCell className="text-right">{formatPosition(p.position)}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
