-- Add secure RLS policies for the leads table
-- These policies ensure only authorized edge functions can insert leads
-- and maintain the existing admin access for reading

-- Policy to allow INSERT only from edge functions (service role)
-- This ensures leads can only be created through the controlled edge function
CREATE POLICY "edge_functions_can_insert_leads" ON public.leads
FOR INSERT 
WITH CHECK (
  -- Only allow inserts from service role (used by edge functions)
  auth.role() = 'service_role'
);

-- Additional policy to explicitly deny direct client inserts
-- This adds an extra layer of security to prevent any potential bypasses
CREATE POLICY "deny_direct_client_inserts" ON public.leads
FOR INSERT 
TO authenticated, anon
WITH CHECK (false);

-- Policy to allow UPDATE only from edge functions (service role)
-- In case we need to update leads in the future
CREATE POLICY "edge_functions_can_update_leads" ON public.leads
FOR UPDATE 
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Policy to allow DELETE only from authorized admins
-- This allows lead cleanup by authorized personnel
CREATE POLICY "admins_can_delete_leads" ON public.leads
FOR DELETE 
USING (
  (auth.jwt() ->> 'email'::text) = ANY (ARRAY['rahuljindal82@gmail.com'::text, 'info@rahuljindal.ca'::text])
);

-- Add a comment explaining the security model
COMMENT ON TABLE public.leads IS 'Customer leads table with strict RLS policies. Leads can only be created via edge functions using service role, ensuring all insertions go through proper validation and security checks.';