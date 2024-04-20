import React from "react";

type Props = { children: React.ReactNode };

const OutlineButton = ({ children }: Props) => {
  return (
    <button className=" w-full text-xl flex justify-center outline outline-1 outline-primary text-primary py-2 px-11 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
      {children}
    </button>
  );
};

export default OutlineButton;
