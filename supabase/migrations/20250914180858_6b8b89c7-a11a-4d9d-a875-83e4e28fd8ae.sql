-- PERMANENT FIX: Disable RLS completely for leads table to allow form submissions
ALTER TABLE public.leads DISABLE ROW LEVEL SECURITY;

-- For security: Create a simple insert policy that works
-- (We'll re-enable RLS but with the most permissive insert policy possible)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Drop ALL existing policies to start fresh
DO $$ 
DECLARE
    pol RECORD;
BEGIN
    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'leads' AND schemaname = 'public'
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS "' || pol.policyname || '" ON public.leads';
    END LOOP;
END $$;

-- Create the most permissive policies possible
CREATE POLICY "allow_all_inserts" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "allow_service_select" ON public.leads FOR SELECT TO service_role USING (true);
CREATE POLICY "allow_service_update" ON public.leads FOR UPDATE TO service_role USING (true);