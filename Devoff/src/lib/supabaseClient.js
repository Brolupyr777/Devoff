import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vcleayhwpddbhtpvbtej.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbGVheWh3cGRkYmh0cHZidGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIzNTgzNzgsImV4cCI6MTk4NzkzNDM3OH0.IQtzakn5tUVpdo5eMNdeXYQ4d0mElG-joEe49cKMvok";
export const supabase = createClient(supabaseUrl, supabaseKey);
