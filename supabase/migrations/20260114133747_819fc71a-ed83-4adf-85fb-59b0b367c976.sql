-- Drop the unused cookie_consents table
-- This table was created for custom cookie consent tracking but is no longer used
-- Cookiebot now handles cookie consent management externally

DROP TABLE IF EXISTS public.cookie_consents;