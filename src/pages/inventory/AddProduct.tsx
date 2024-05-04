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

import { Product } from "@/types/Products";
import { useAddProduct } from "@/services/mutation";
import { SubmitHandler, useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm<Product>();
  const addProductMutation = useAddProduct();

  const handleAddProduct: SubmitHandler<Product> = (data) => {
    addProductMutation.mutate(data);
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <FontAwesomeIcon icon={faAdd} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] p-11">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="grid gap-5 py-4 "
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              Name :
            </Label>
            <Input
              placeholder="Product Name"
              className="col-span-3"
              {...register("product_name")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              Description :
            </Label>
            <Input
              placeholder="Description"
              className="col-span-3"
              {...register("description")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              Stocks :
            </Label>
            <Input
              type="number"
              placeholder="Stocks"
              className="col-span-3"
              {...register("stock")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              (Orig) Price :
            </Label>
            <Input
              type="number"
              placeholder="Original Price"
              className="col-span-3"
              {...register("original_price")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              (Sell) Price :
            </Label>
            <Input
              type="number"
              placeholder="Selling Price"
              className="col-span-3"
              {...register("selling_price")}
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              disabled={addProductMutation.isPending}
              value={
                addProductMutation.isPending ? "Creating..." : "Product Created"
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

export default AddProduct;
