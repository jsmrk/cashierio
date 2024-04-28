import { useProducts } from "@/services/queries";
import { DataTable } from "./transactionsTable/data-table";
import { columns } from "./transactionsTable/columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SidebarTitle from "@/components/SidebarTitle";
import { Products } from "@/types/Products";
import { useAddProduct } from "@/services/mutation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const Inventory = () => {
  const { data, isPending, error, isError } = useProducts();
  const { register, handleSubmit, reset } = useForm<Products>();
  const addProductMutation = useAddProduct();

  const handleAddProduct: SubmitHandler<Products> = (data) => {
    addProductMutation.mutate(data);
    reset();
  };

  return (
    <div className="flex h-full gap-5">
      {/* LEFT */}

      <div className="basis-4/6 flex flex-col gap-5">
        <SidebarTitle className={"text-white"}>Inventory</SidebarTitle>
        <Input className="border-2-white"></Input>
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
                  tableHeader="List of Products"
                  tableDescription=""
                />
              </div>
            )}
          </div>
        </Card>
      </div>
      {/* RIGHT */}
      <Card className="basis-2/6">
        <CardHeader>
          <CardTitle>Add Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleAddProduct)}>
            <Input placeholder="Name" {...register("name")} />
            <Input type="number" placeholder="Stocks" {...register("stock")} />
            <Input
              type="number"
              placeholder="Original"
              {...register("originalPrice")}
            />
            <Input type="number" placeholder="Price" {...register("price")} />
            <Button
              type="submit"
              disabled={addProductMutation.isPending}
              value={
                addProductMutation.isPending ? "Creating..." : "Todo Created"
              }
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
