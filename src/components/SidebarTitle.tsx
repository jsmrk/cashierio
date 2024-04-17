import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

const SidebarTitle = ({ children, className }: Props) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className={`${className} border-b-2 pb-5 border-b-slate-700`}>
      <div className={` text-white font-bold text-5xl mb-3`}>{children}</div>
      <div className="text-xl text-t-grey">{formattedDateTime}</div>
    </div>
  );
};

export default SidebarTitle;
