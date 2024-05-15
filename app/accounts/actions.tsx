"use server";

import { createSupabaseAdmin } from "@/lib/utils/supabase/admin";

export const createMember = async (data: {
  name: string;
  role: "user" | "admin";
  status: "active" | "resigned";
  email: string;
  password: string;
  confirm: string;
}) => {
  const supabase = await createSupabaseAdmin();

  console.log(data.name);
  // CREATE ACCOUNT
  const createResult = await supabase.auth.admin.createUser({
    email: data.email,
    password: data.password,
    email_confirm: true,
    user_metadata: {
      role: data.role,
    },
  });

  //   ADD MEMBER
  if (createResult.error?.message) {
    const errorMessage = createResult.error.message;
    return errorMessage;
  } else {
    const memberResult = await supabase
      .from("member")
      .insert({ name: data.name, id: createResult.data.user?.id });
    if (memberResult.error?.message) {
      const errorMessage2 = memberResult.error.message;
      return errorMessage2;
    } else {
      const permissionResult = await supabase.from("permission").insert({
        role: data.role,
        member_id: createResult.data.user?.id,
        status: data.status,
      });
      const errorMessage3 = permissionResult.error?.message;
      return errorMessage3;
    }
  }
};
