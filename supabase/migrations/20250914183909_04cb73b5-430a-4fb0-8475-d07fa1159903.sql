-- Create more secure lead access policies - restrict to specific admin users only

-- Drop the current overly permissive policy
DROP POLICY IF EXISTS "authenticated_admin_can_view_leads" ON public.leads;

-- Create restrictive policy for specific admin email addresses only
CREATE POLICY "only_specific_admins_can_view_leads"
ON public.leads
FOR SELECT
TO authenticated
USING (
  auth.jwt() ->> 'email' IN ('rahuljindal82@gmail.com', 'info@rahuljindal.ca')
);