import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wygjmgrrvnlxnpdzfmdt.supabase.co";

const supabaseKey = "sb_publishable_4Od-hWj9QpQc1TuO6kSDTQ_i7T6cbQI";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);