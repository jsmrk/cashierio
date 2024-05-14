"use server";

import createSupabaseServerClient from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";

//SIGN UP
export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirm: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });

  return JSON.stringify(result);
}

// //LOG IN
export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  return JSON.stringify(result);
}

// LOG OUT
export const logout = async () => {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();

  redirect("/");
};
