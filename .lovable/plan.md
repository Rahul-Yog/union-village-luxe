

## Problem

Enabling Lovable Cloud created a fresh, empty backend. None of the previously existing tables (`leads`, `profiles`, `user_roles`, etc.) were migrated, so:
1. Form submissions fail with `Could not find the table 'public.leads' in the schema cache` (visible in edge function logs).
2. `src/pages/Dashboard.tsx` won't compile because `'leads'` isn't in the generated database types.

The 20 old migration files in `supabase/migrations/` were authored against the previous external Supabase project and were not replayed against the new Cloud project.

## Fix Plan

### 1. Recreate the `leads` table in the new Cloud database
Run a single consolidated migration that creates everything `submit-lead` and `Dashboard` need:

- `public.leads` table with the columns the edge function inserts:
  `id, first_name, last_name, email, phone, interested_in, price_range, is_realtor, newsletter_consent, privacy_consent, source, form_type, user_agent, ip_address, message, timeline, created_at`
- Enable Row Level Security on `leads`.
- RLS policies:
  - No public SELECT/INSERT/UPDATE/DELETE (the edge function uses the service role key and bypasses RLS — this is already the secure pattern in `submit-lead/index.ts`).
  - Authenticated admins can SELECT all leads (for the Dashboard).
- Index on `(ip_address, created_at)` to keep the rate-limit lookup fast.

### 2. Recreate the admin role infrastructure (for the Dashboard)
- `app_role` enum (`admin`, `user`).
- `public.user_roles` table with RLS.
- `public.has_role(_user_id, _role)` SECURITY DEFINER function.
- Admin SELECT policy on `leads` using `has_role(auth.uid(), 'admin')`.

### 3. Recreate the `profiles` table + auto-create trigger
- `public.profiles (id, email, first_name, last_name, created_at, updated_at)` linked to `auth.users` by id.
- Trigger on `auth.users` insert to populate `profiles` and assign default `'user'` role.
- RLS so users can read/update their own profile.

### 4. Verify after migration
- Confirm `src/integrations/supabase/types.ts` regenerates with `leads`, `profiles`, `user_roles` so the Dashboard build error clears.
- Submit a test form on `/` to confirm:
  - Lead appears in the database.
  - `submit-lead` edge function logs show success (no schema-cache error).
  - Mailchimp receives the subscriber with `Union Village`, `Markham` tags.

## Notes / Things NOT changing

- `submit-lead/index.ts` code is correct as-is — only the underlying table is missing.
- Mailchimp secrets (`MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`) are already set.
- WhatsApp footer changes from earlier are unaffected.
- Existing users in the old (disconnected) Supabase project will not carry over — anyone who needs Dashboard access will need to sign up again on `/auth` and be promoted to `admin` (I'll seed an admin row for the first signup, or you can tell me which email to grant admin to).

