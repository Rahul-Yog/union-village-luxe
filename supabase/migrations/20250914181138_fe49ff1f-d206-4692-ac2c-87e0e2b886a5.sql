-- Clean up all existing policies since RLS is disabled
DROP POLICY IF EXISTS "anon_can_insert_leads" ON public.leads;
DROP POLICY IF EXISTS "allow_service_select" ON public.leads;
DROP POLICY IF EXISTS "allow_service_update" ON public.leads;