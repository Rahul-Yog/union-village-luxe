-- Fix the security warning by setting search_path for the function
CREATE OR REPLACE FUNCTION public.handle_new_lead_notification()
RETURNS TRIGGER AS $$
DECLARE
  function_url text;
BEGIN
  -- Get the function URL from environment or construct it
  function_url := 'https://kundhcwjungidjsmerqf.supabase.co/functions/v1/send-lead-notification';
  
  -- Make HTTP request to the edge function (async)
  PERFORM
    net.http_post(
      url := function_url,
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
      ),
      body := jsonb_build_object('leadId', NEW.id::text)
    );
  
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Log the error but don't fail the insert
  RAISE WARNING 'Failed to send lead notification: %', SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;