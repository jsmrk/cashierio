import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import readUserSession from "./action/action";
import { redirect } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isLoggedIn = async () => {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/");
  }
};
