CREATE TABLE public.gsc_snapshots (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    snapshot_date date NOT NULL DEFAULT CURRENT_DATE,
    site_url text NOT NULL DEFAULT 'sc-domain:financesalbertem.cz',
    dimension_type text NOT NULL CHECK (dimension_type IN ('site', 'query', 'page', 'keyword_group')),
    dimension_value text NOT NULL,
    clicks integer NOT NULL DEFAULT 0,
    impressions integer NOT NULL DEFAULT 0,
    ctr numeric(6,5) NOT NULL DEFAULT 0,
    position numeric(6,2) NOT NULL DEFAULT 0,
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_gsc_snapshots_date ON public.gsc_snapshots(snapshot_date DESC);
CREATE INDEX idx_gsc_snapshots_type ON public.gsc_snapshots(dimension_type);
CREATE INDEX idx_gsc_snapshots_value ON public.gsc_snapshots(dimension_value);
CREATE INDEX idx_gsc_snapshots_date_type ON public.gsc_snapshots(snapshot_date DESC, dimension_type);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.gsc_snapshots TO authenticated;
GRANT ALL ON public.gsc_snapshots TO service_role;

ALTER TABLE public.gsc_snapshots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can select all GSC snapshots"
ON public.gsc_snapshots
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert GSC snapshots"
ON public.gsc_snapshots
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update GSC snapshots"
ON public.gsc_snapshots
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete GSC snapshots"
ON public.gsc_snapshots
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));