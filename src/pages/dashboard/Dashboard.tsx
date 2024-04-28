/* eslint-disable @typescript-eslint/no-unused-vars */
import { useProducts } from "@/services/queries";
import Card from "../../components/Card";
import SidebarTitle from "../../components/SidebarTitle";
import Summary from "./Summary";
import TopSales from "./TopSales";

const Dashboard = () => {
  return (
    <div className="h-full w-full grid grid-cols-10 gap-5 text-white ">
      {/* LEFT DIV */}
      <div className="flex flex-col col-span-7 gap-5 ">
        <SidebarTitle className="basis-1/8">Dashboard</SidebarTitle>
        <div className="basis-1/6">
          <Summary />
        </div>
        <Card className="basis-5/6">asdsad</Card>
      </div>
      {/* RIGHT DIV */}
      <div className="flex flex-col col-span-3 gap-5">
        <Card className="basis-1/2">
          <TopSales />
        </Card>
        <Card className="basis-1/2">Least sold</Card>
      </div>
    </div>
  );
};

export default Dashboard;
