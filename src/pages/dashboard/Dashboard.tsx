/* eslint-disable @typescript-eslint/no-unused-vars */
import { recentTransactions } from "@/shared/dashboardTableData";
import Card from "../../components/Card";
import SidebarTitle from "../../components/SidebarTitle";
import Summary from "./Summary";
import TopSales from "./TopSales";
import { columns } from "./transactionsTable/columns";
import { DataTable } from "./transactionsTable/data-table";

const Dashboard = () => {
  const transactionsData = recentTransactions;

  return (
    <div className="h-full w-full grid grid-cols-10 gap-7 text-white ">
      {/* LEFT DIV */}
      <div className="flex flex-col col-span-7 gap-7 ">
        <SidebarTitle className="basis-1/6">Dashboard</SidebarTitle>
        <div className="basis-1/6">
          <Summary />
        </div>
        <Card className="basis-4/6">
          <DataTable columns={columns} data={transactionsData} />
        </Card>
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
