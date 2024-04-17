/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Card from "../../components/Card";
import SidebarTitle from "../../components/SidebarTitle";

const Dashboard = () => {
  return (
    <div className="h-full w-full grid grid-cols-7 gap-11 text-white ">
      {/* LEFT DIV */}
      <div className="flex flex-col col-span-4 gap-11 ">
        <SidebarTitle className="basis-1/4">Dashboard</SidebarTitle>
        <div className=" basis-2/4 flex gap-11 ">
          <Card className="basis-1/3">1</Card>
          <Card className="basis-1/3">2</Card>
          <Card className="basis-1/3">3</Card>
        </div>
        <Card className="basis-3/4">transactions</Card>
      </div>
      {/* RIGHT DIV */}
      <div className="flex flex-col col-span-3 gap-11">
        <Card className="basis-1/2">Most Sold</Card>
        <Card className="basis-1/2">Least sold</Card>
      </div>
    </div>
  );
};

export default Dashboard;
