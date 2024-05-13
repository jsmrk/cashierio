import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="absolute top-0 h-20 w-full p-5 flex justify-between border-b">
      <p className="text-3xl font-extrabold">Cashierio</p>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
