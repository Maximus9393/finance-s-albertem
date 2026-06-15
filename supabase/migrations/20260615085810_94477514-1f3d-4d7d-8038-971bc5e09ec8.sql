
-- 1. Remove contacts from realtime publication
ALTER PUBLICATION supabase_realtime DROP TABLE public.contacts;

-- 2. Storage policies for 'Fomular - odpovedi' bucket - admin only
CREATE POLICY "Admins can read formular files"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'Fomular - odpovedi' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert formular files"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'Fomular - odpovedi' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update formular files"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'Fomular - odpovedi' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete formular files"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'Fomular - odpovedi' AND public.has_role(auth.uid(), 'admin'));

-- 3. Revoke EXECUTE on has_role from anon/authenticated; RLS still works (evaluated by definer)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon, authenticated;
