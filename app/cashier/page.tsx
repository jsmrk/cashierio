import { isLoggedIn } from "@/lib/utils";
import React from "react";

export default async function Cashier() {
  await isLoggedIn();
  return <div className="w-full">Cashier</div>;
}
