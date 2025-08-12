-- Ensure RLS is enabled on contacts (idempotent)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Drop any existing SELECT policies on contacts to avoid duplicates
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'contacts' AND cmd = 'SELECT'
  ) THEN
    EXECUTE (
      SELECT string_agg(format('DROP POLICY IF EXISTS %I ON public.contacts;', polname), ' ')
      FROM pg_policies
      WHERE schemaname = 'public' AND tablename = 'contacts' AND cmd = 'SELECT'
    );
  END IF;
END$$;

-- Explicitly deny all public SELECT access to contacts
CREATE POLICY "No public select on contacts"
ON public.contacts
FOR SELECT
TO public
USING (false);

-- Note: Service role bypasses RLS by design; dashboards using the service key will retain access.