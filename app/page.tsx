import readUserSession from "@/lib/action/action";
import Auth from "./auth/page";

import React from "react";
import { redirect } from "next/navigation";

const home = async () => {
  const { data } = await readUserSession();
  console.log(data.session);
  if (data.session) {
    return redirect("/dashboard");
  } else {
    return (
      <main className="h-screen w-full flex justify-center items-center">
        <Auth />
      </main>
    );
  }
};

export default home;
