-- Add referral source field to contacts table
ALTER TABLE public.contacts 
ADD COLUMN referral_source TEXT NOT NULL DEFAULT 'web';