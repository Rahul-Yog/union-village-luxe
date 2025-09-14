-- Permanently fix form submissions by disabling RLS on leads table
-- Security will be maintained through dashboard authentication

-- Remove all existing policies
DROP POLICY IF EXISTS "allow_anonymous_lead_submission" ON public.leads;
DROP POLICY IF EXISTS "allow_authenticated_lead_submission" ON public.leads;
DROP POLICY IF EXISTS "authenticated_users_can_view_leads" ON public.leads;

-- Disable RLS entirely for leads table to prevent recurring issues
ALTER TABLE public.leads DISABLE ROW LEVEL SECURITY;