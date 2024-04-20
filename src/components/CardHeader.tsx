import React from "react";

type Props = {
  children: React.ReactNode;
};

const CardHeader = ({ children }: Props) => {
  return (
    <div className={`text-2xl font-bold flex justify-between`}>{children}</div>
  );
};

export default CardHeader;
