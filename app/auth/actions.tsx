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
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });
  const errorMessage = error?.message;
  return errorMessage;
}

// //LOG IN
export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  const errorMessage = error?.message;
  return errorMessage;
}

// LOG OUT
export const logout = async () => {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();

  redirect("/");
};
