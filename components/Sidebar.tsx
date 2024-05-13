"use client";

import React from "react";
import ThemeToggle from "./theme-toggle";
import NavLink from "./NavLink";
import {
  CircleDollarSign,
  LayoutDashboard,
  LogOut,
  ShoppingCart,
  UserCog,
  Warehouse,
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Label } from "./ui/label";
import { usePathname, useRouter } from "next/navigation";

const sidebardItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard />,
    href: "/dashboard",
  },
  {
    name: "Cashier",
    icon: <ShoppingCart />,
    href: "/cashier",
  },
  {
    name: "Inventory",
    icon: <Warehouse />,
    href: "/inventory",
  },
  {
    name: "Sales",
    icon: <CircleDollarSign />,
    href: "/sales",
  },
  {
    name: "Accounts",
    icon: <UserCog />,
    href: "/accounts",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`${
        pathname === "/" ? "hidden" : ""
      } h-full w-[20rem] border border-r flex flex-col justify-between`}
    >
      <div>
        <div className="flex h-40 gap-3 justify-center items-center">
          <h1 className="text-3xl font-extrabold">Cashierio</h1>
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-between">
          {sidebardItems.map((d) => (
            <NavLink
              className={pathname === d.href ? "bg-primary" : ""}
              key={d.href}
              hrefLink={d.href}
            >
              {d.icon} {d.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="text-center pb-11">
        <div className="flex gap-3 pb-5 px-5 justify-center items-center">
          <Avatar className="size-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm text-left gap-1">
            <Label className="font-extrabold">JM. Baguio</Label>
            <Label className="font-light">Administrator</Label>
          </div>
        </div>
        <Button
          variant={"outline"}
          className="text-sm"
          onClick={() => router.push("/")}
        >
          <LogOut className="pr-2 text-sm" />
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
