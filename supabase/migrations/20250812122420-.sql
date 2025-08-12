-- Create contacts table for public contact form submissions
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service text,
  message text,
  gdpr_consent boolean not null default false,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.contacts enable row level security;

-- Allow anonymous and authenticated users to insert only when GDPR consent is true
create policy if not exists "Public can insert contacts with consent"
  on public.contacts
  for insert
  to public
  with check (gdpr_consent = true);

-- (Optional) No SELECT policy added to keep data private by default