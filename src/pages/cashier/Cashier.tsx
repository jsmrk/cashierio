import Card from "@/components/Card";
import SidebarTitle from "@/components/SidebarTitle";
import { useProducts } from "@/services/queries";
import { InventoryTable } from "../../components/InventoryTable";
import { MenuColumn } from "./MenuColumn";

const Cashier = () => {
  const { data, isPending, error, isError } = useProducts();

  return (
    <div className="h-full w-full flex gap-7 text-white">
      {/* Left */}
      <div className="flex flex-col basis-4/6 ">
        <SidebarTitle className="basis-1/12">Jess Mark A. Baguio</SidebarTitle>
        <Card className="mt-5 h-full basis-11/12">
          {isPending ? (
            <div>loading...</div>
          ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
            <div>
              <InventoryTable
                columns={MenuColumn}
                data={data}
                pageSize={10}
                tableHeader="Available Products"
                action=<></>
              />
            </div>
          )}
        </Card>
      </div>
      {/* Right */}
      <Card className="basis-2/6">2</Card>
    </div>
  );
};

export default Cashier;
