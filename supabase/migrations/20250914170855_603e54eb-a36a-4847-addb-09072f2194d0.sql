-- Fix RLS policy to allow anonymous lead insertion
DROP POLICY IF EXISTS "Authenticated users can insert leads" ON public.leads;

CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Add realtor field to leads table
ALTER TABLE public.leads 
ADD COLUMN is_realtor boolean DEFAULT false;