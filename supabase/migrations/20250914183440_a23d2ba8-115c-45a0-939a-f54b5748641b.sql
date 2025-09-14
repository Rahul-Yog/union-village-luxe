-- Enable RLS with strict security policies
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- STRICT POLICY: Only authenticated users can view leads (admin dashboard)
CREATE POLICY "authenticated_admin_can_view_leads"
ON public.leads
FOR SELECT
TO authenticated
USING (true);

-- NO INSERT POLICIES FOR DIRECT API ACCESS
-- This prevents anyone from directly inserting via API
-- Forms will use edge function with service role key instead