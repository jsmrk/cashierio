"use server";

import createSupabaseServerClient from "../utils/supabase/server";

const readUserSession = async () => {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
};

export default readUserSession;
