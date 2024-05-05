import Card from "@/components/Card";
import SidebarTitle from "@/components/SidebarTitle";
import { useProducts } from "@/services/queries";
import { InventoryTable } from "../../components/InventoryTable";
import { MenuColumn } from "./MenuColumn";

const Cashier = () => {
  const { data, isPending, error, isError } = useProducts();

  return (
    <div className="h-full w-full grid grid-cols-3 gap-7 text-white">
      {/* Left */}
      <div className="flex flex-col col-span-2 ">
        <SidebarTitle className="basis-1/6">Jess Mark A. Baguio</SidebarTitle>

        <Card className="mt-5 h-full">
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
                tableHeader=""
                tableDescription=""
                action=<></>
              />
            </div>
          )}
        </Card>
      </div>
      {/* Right */}
      <Card className="flex flex-col col-span-1 gap-5">2</Card>
    </div>
  );
};

export default Cashier;
