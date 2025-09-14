-- Fix RLS policies to allow anonymous form submissions while maintaining security

-- Drop existing policies first
DROP POLICY IF EXISTS "Anyone can submit leads" ON public.leads;
DROP POLICY IF EXISTS "Authenticated users can view leads" ON public.leads;

-- Create proper policy for anonymous lead submissions (contact forms)
CREATE POLICY "allow_anonymous_lead_submission"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy for authenticated lead submissions (if needed)
CREATE POLICY "allow_authenticated_lead_submission" 
ON public.leads
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Create policy for authenticated users to view leads (admin dashboard)
CREATE POLICY "authenticated_users_can_view_leads"
ON public.leads
FOR SELECT
TO authenticated
USING (true);

-- No UPDATE or DELETE policies = no one can modify existing leads