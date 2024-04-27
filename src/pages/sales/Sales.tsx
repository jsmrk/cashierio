import SidebarTitle from "../../components/SidebarTitle";
import Card from "../../components/Card";
import SalesTransactions from "./SalesTransactions";
import TotalSales from "./TotalSales";
import TotalQuantity from "./TotalQuantity";
import TotalRecords from "./TotalRecords";
import { Input } from "@/components/ui/input";

const Sales = () => {
  return (
    <div className="h-full w-full grid grid-cols-10 gap-7 text-white ">
      <div className="flex flex-col col-span-7 gap-7 ">
        <SidebarTitle className="basis-1/6">Sales</SidebarTitle>
        <Card className="basis-4/6">
          <Input type="search" placeholder="Search Item" className="mb-8" />
          <SalesTransactions />
        </Card>
      </div>
      <div className="flex flex-col col-span-3 gap-5">
        <Card className="basis-1/2">
          <TotalRecords />
        </Card>
        <Card className="basis-1/2">
          <TotalQuantity />
        </Card>
        <Card className="basis-1/2">
          <TotalSales />
        </Card>
      </div>
    </div>
  );
};

export default Sales;
