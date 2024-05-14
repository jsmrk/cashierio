import { isLoggedIn } from "@/lib/utils";
import React from "react";

export default async function Sales() {
  await isLoggedIn();
  return <div className="w-full">Sales</div>;
}
