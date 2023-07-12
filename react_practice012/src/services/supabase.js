import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jdsoathhqndqyzvjvcdl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impkc29hdGhocW5kcXl6dmp2Y2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxNzE2NDksImV4cCI6MjAwNDc0NzY0OX0.hPA6prKZaqU4UdLvhrXqL4ry8AV7Eh7P26fNs2Be-ZM";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
