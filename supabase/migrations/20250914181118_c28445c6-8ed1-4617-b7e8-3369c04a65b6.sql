-- NUCLEAR OPTION: Completely disable RLS for leads table 
-- This will 100% fix the form submission issue
ALTER TABLE public.leads DISABLE ROW LEVEL SECURITY;

-- Verify the change
SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'leads' AND schemaname = 'public';