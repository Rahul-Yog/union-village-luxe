-- Re-enable RLS on leads table and create secure policies
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert leads (for contact forms)
CREATE POLICY "Anyone can submit leads"
ON public.leads
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view leads (for admin dashboard)
CREATE POLICY "Authenticated users can view leads"
ON public.leads
FOR SELECT
USING (auth.uid() IS NOT NULL);

-- Prevent updates and deletes for data integrity
-- (No policies created = no access allowed)