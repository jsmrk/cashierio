import Card from "@/components/Card";
import SidebarTitle from "@/components/SidebarTitle";
import { Input } from "@/components/ui/input";
import CashierTable from "./CashierTable";

const Cashier = () => {
  return (
    <div className="h-full w-full grid grid-cols-3 gap-7 text-white">
      {/* Left */}
      <div className="flex flex-col col-span-2 ">
        <SidebarTitle className="basis-1/6">Jess Mark A. Baguio</SidebarTitle>

        <Card className="mt-5 h-full">
          <Input type="search" placeholder="Search Item" className="mb-8" />
          <CashierTable />
        </Card>
      </div>
      {/* Right */}
      <Card className="flex flex-col col-span-1 gap-5">2</Card>
    </div>
  );
};

export default Cashier;
