import { DataTable } from "./transactionsTable/data-table";
import { columns } from "./transactionsTable/columns";
import { Card } from "@/components/ui/card";
import SidebarTitle from "@/components/SidebarTitle";
import { useProducts } from "@/services/queries";
import AddProduct from "./AddProduct";

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
              <DataTable
                columns={columns}
                data={data}
                pageSize={10}
                tableHeader=""
                tableDescription=""
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
