import Card from "@/components/Card";
import SidebarTitle from "@/components/SidebarTitle";
import { useAvailableProducts } from "@/services/queries/inventoryQueries";
import { MenuColumn } from "./MenuColumn";
import { CashierTable } from "./CashierTable/CashierTable";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CashierColumn } from "./CashierTable/CashierColumn";
import { MenuTable } from "./MenuTable";
import { useSelectedProducts } from "@/services/queries/cashierQueries";
import { useResetSelectedItems } from "@/services/mutations/cashierMutations";

const Cashier = () => {
  const useAvailableProduct = useAvailableProducts();
  const useSelectedProduct = useSelectedProducts();
  const resetSelectedMutatation = useResetSelectedItems();

  const handleDelete = async () => {
    await resetSelectedMutatation.mutateAsync();
    console.log("Success");
  };

  return (
    <div className="h-full w-full flex gap-5 text-white">
      {/* Left */}
      <div className="flex flex-col basis-4/6 ">
        <SidebarTitle className="basis-1/12">Jess Mark A. Baguio</SidebarTitle>
        <Card className="mt-5 h-full basis-11/12">
          {useAvailableProduct.isPending ? (
            <div>loading...</div>
          ) : useAvailableProduct.isError ? (
            <div>Error: {useAvailableProduct.error.message}</div>
          ) : (
            <div>
              <MenuTable
                columns={MenuColumn}
                data={useAvailableProduct.data}
                pageSize={8}
                tableHeader="Available Products"
                action=<></>
              />
            </div>
          )}
        </Card>
      </div>
      {/* Right */}
      <Card className="flex flex-col basis-2/6">
        <div className="basis-4/6">
          {" "}
          {useSelectedProduct.isPending ? (
            <div>loading...</div>
          ) : useSelectedProduct.isError ? (
            <div>Error: {useSelectedProduct.error.message}</div>
          ) : (
            <div>
              <CashierTable
                columns={CashierColumn}
                data={useSelectedProduct.data}
                tableHeader={"Transaction"}
                pageSize={7}
              />
            </div>
          )}
        </div>
        <div className="grid gap-5 basis-2/6">
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="total" className="text-right text-xl">
              Total :
            </Label>
            <Input disabled className="col-span-4" />
          </div>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="cash" className="text-right text-xl">
              Cash :
            </Label>
            <Input className="col-span-4" />
          </div>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="Change" className="text-right text-xl">
              Change :
            </Label>
            <Input disabled className="col-span-4" />
          </div>
          <div className="flex justify-end gap-5">
            <Button className="bg-grey" onClick={handleDelete}>
              Reset
            </Button>
            <Button>Confirm Transaction</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Cashier;
