import React from "react";

type Props = {
  children: React.ReactNode;
};

const CardHeader = ({ children }: Props) => {
  return (
    <div
      className={`text-2xl font-bold flex justify-between border-b-2 pb-5 border-b-slate-700`}
    >
      {children}
    </div>
  );
};

export default CardHeader;
