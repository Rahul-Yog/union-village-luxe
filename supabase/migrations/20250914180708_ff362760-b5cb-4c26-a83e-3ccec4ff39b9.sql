-- Re-enable RLS and set up proper policies for permanent fix
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON public.leads;
DROP POLICY IF EXISTS "Service role can view all leads" ON public.leads;
DROP POLICY IF EXISTS "Service role can update all leads" ON public.leads;

-- Create a comprehensive insert policy that allows all users to insert leads
CREATE POLICY "Allow public lead submission"
ON public.leads
FOR INSERT
WITH CHECK (true);

-- Create select policy for service role only
CREATE POLICY "Service role select access"
ON public.leads 
FOR SELECT
TO service_role
USING (true);

-- Create update policy for service role only  
CREATE POLICY "Service role update access"
ON public.leads
FOR UPDATE
TO service_role
USING (true);