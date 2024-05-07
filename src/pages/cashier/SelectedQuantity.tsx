import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { SelectedProduct } from "@/types/SelectedProducts";
import { Product } from "@/types/Products";
import { useAddSelectedItem } from "@/services/mutations/cashierMutations";

const SelectedQuantity = (product: Product) => {
  const { register, handleSubmit, reset } = useForm<SelectedProduct>();
  const addSelectedMutation = useAddSelectedItem();

  const handleAddProduct: SubmitHandler<SelectedProduct> = (
    data: SelectedProduct
  ) => {
    data.id = product.id;
    data.product_name = product.product_name;
    data.price = product.selling_price * data.quantity;
    addSelectedMutation.mutate(data);
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent hover:bg-white hover:text-primary">
          <FontAwesomeIcon icon={faAdd} className="hover:text-primary" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] p-11">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="grid gap-5 py-4 "
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Quantity :
            </Label>
            <Input
              placeholder="Quantity"
              className="col-span-3"
              {...register("quantity")}
            />
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={addSelectedMutation.isPending}
              value={
                addSelectedMutation.isPending
                  ? "Creating..."
                  : "Product Created"
              }
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SelectedQuantity;
