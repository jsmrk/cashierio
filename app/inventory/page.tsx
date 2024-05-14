import { isLoggedIn } from "@/lib/utils";
import React from "react";

export default async function Inventory() {
  await isLoggedIn();
  return <div className="w-full">Inventory</div>;
}
