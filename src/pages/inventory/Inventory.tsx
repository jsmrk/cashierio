import { InventoryTable } from "../../components/InventoryTable";
import { Card } from "@/components/ui/card";
import SidebarTitle from "@/components/SidebarTitle";
import { useProducts } from "@/services/queries";
import AddProduct from "./AddProduct";
import { InventoryColumn } from "./InventoryColumn";

const Inventory = () => {
  const { data, isPending, error, isError } = useProducts();

  return (
    <div className="flex h-full w-full flex-col gap-5">
      <SidebarTitle className={"text-white"}>Inventory</SidebarTitle>
      <Card className="h-full">
        <div>
          {isPending ? (
            <div>loading...</div>
          ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
            <div>
              <InventoryTable
                columns={InventoryColumn}
                data={data}
                pageSize={10}
                tableHeader="All Products"
                action={<AddProduct />}
              />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Inventory;
