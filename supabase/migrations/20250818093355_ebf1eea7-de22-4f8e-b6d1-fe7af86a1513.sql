-- Update RLS policy to allow albert.gurdzjan@4fin.cz to read contacts
DROP POLICY IF EXISTS "Only authorized users can read contacts" ON public.contacts;

-- Create policy that allows specific authorized user to read contacts
CREATE POLICY "Only authorized users can read contacts" 
ON public.contacts 
FOR SELECT 
USING (auth.email() = 'albert.gurdzjan@4fin.cz');