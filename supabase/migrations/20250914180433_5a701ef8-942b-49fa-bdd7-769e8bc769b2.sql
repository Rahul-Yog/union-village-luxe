-- Drop all existing policies on leads table
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;
DROP POLICY IF EXISTS "Service role can view all leads" ON public.leads;
DROP POLICY IF EXISTS "Service role can update leads" ON public.leads;

-- Create new policy that allows anyone to insert leads (for anonymous form submissions)
CREATE POLICY "Enable insert for anonymous users" 
ON public.leads 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Create policy for service role to read all leads
CREATE POLICY "Service role can view all leads" 
ON public.leads 
FOR SELECT 
TO service_role 
USING (true);

-- Create policy for service role to update leads  
CREATE POLICY "Service role can update all leads" 
ON public.leads 
FOR UPDATE 
TO service_role 
USING (true);

-- Ensure RLS is enabled
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;