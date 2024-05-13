import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { string } from "zod";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  children: React.ReactNode;
  hrefLink: Url;
  className?: string;
};

const NavLink = ({ children, hrefLink, className }: Props) => {
  return (
    <Link href={hrefLink}>
      <Button
        variant={"ghost"}
        className={`${className} rounded-none w-full py-8 flex gap-5 justify-start items-center pl-16 hover:bg-primary`}
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavLink;
