-- FINAL FIX: Create policy specifically for anon role (not public)
DROP POLICY IF EXISTS "allow_all_inserts" ON public.leads;

-- Create insert policy specifically for anon and authenticated roles
CREATE POLICY "anon_can_insert_leads" 
ON public.leads 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);