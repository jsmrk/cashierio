import { isLoggedIn } from "@/lib/utils";
import React from "react";
import SignUpMember from "./AddMember";
import { Toaster } from "@/components/ui/toaster";

export default async function Accounts() {
  await isLoggedIn();
  return (
    <main className="w-full">
      <div>
        <Toaster />
        <SignUpMember />
      </div>
    </main>
  );
}
