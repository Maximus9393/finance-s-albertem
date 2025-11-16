-- Create table for cookie consents
CREATE TABLE public.cookie_consents (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id text NOT NULL,
  consent_date timestamp with time zone NOT NULL DEFAULT now(),
  analytics_consent boolean NOT NULL DEFAULT false,
  marketing_consent boolean NOT NULL DEFAULT false,
  preferences_consent boolean NOT NULL DEFAULT false,
  ip_address text,
  user_agent text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.cookie_consents ENABLE ROW LEVEL SECURITY;

-- Policy: Users can insert their own consents
CREATE POLICY "Users can insert their own cookie consents"
ON public.cookie_consents
FOR INSERT
WITH CHECK (true);

-- Policy: Users can view their own consents
CREATE POLICY "Users can view their own cookie consents"
ON public.cookie_consents
FOR SELECT
USING (
  auth.uid() = user_id 
  OR session_id = current_setting('request.jwt.claims', true)::json->>'session_id'
);

-- Policy: Admins can view all consents
CREATE POLICY "Admins can view all cookie consents"
ON public.cookie_consents
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for faster lookups
CREATE INDEX idx_cookie_consents_user_id ON public.cookie_consents(user_id);
CREATE INDEX idx_cookie_consents_session_id ON public.cookie_consents(session_id);
CREATE INDEX idx_cookie_consents_consent_date ON public.cookie_consents(consent_date DESC);