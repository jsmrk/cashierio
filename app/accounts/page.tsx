import { isLoggedIn } from "@/lib/utils";
import React from "react";

export default async function Accounts() {
  await isLoggedIn();
  return <div className="w-full">Accounts</div>;
}
