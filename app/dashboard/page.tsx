import { Card } from "@/components/ui/card";
import { isLoggedIn } from "@/lib/utils";
import React from "react";

export default function Dashboard() {
  isLoggedIn();

  return <main className="w-full">dashboard</main>;
}
