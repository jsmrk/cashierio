import { isLoggedIn } from "@/lib/utils";
import React from "react";

export default async function Dashboard() {
  await isLoggedIn();
  return <main className="w-full">dashboard</main>;
}
