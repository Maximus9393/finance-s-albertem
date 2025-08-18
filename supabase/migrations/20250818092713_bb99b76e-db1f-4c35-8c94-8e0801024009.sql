-- Fix conflicting RLS policies on contacts table
-- Remove the permissive read policy that allows public access to sensitive customer data

-- First, drop the conflicting policies
DROP POLICY IF EXISTS "Enable read access for all users" ON public.contacts;
DROP POLICY IF EXISTS "No public select on contacts" ON public.contacts;

-- Create a secure policy that only allows authorized staff/admin access to read contacts
-- For now, this blocks all public read access to protect customer data
CREATE POLICY "Only authorized users can read contacts" 
ON public.contacts 
FOR SELECT 
USING (false);  -- This can be updated later when authentication/authorization is implemented

-- Keep the existing insert policy (it's secure as it requires GDPR consent)
-- The "Public can insert contacts with consent" policy remains unchanged