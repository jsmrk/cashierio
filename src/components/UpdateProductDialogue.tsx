import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Product } from "@/types/Products";
import { useUpdateProduct } from "@/services/mutation";
import { SubmitHandler, useForm } from "react-hook-form";

const UpdateProduct = (data: Product) => {
  const updateProductMutation = useUpdateProduct();
  const { register, handleSubmit } = useForm<Product>();

  const handleUpdateProduct: SubmitHandler<Product> = (updatedProduct) => {
    updateProductMutation.mutate({
      id: data.id,
      product_name: updatedProduct.product_name,
      stock: updatedProduct.stock,
      original_price: updatedProduct.original_price,
      selling_price: updatedProduct.selling_price,
      description: updatedProduct.description,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <FontAwesomeIcon className="text-green-200" icon={faPenToSquare} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>{}</DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          onSubmit={handleSubmit(handleUpdateProduct)}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              ID :
            </Label>
            <Input
              defaultValue={data.id}
              {...register("product_name")}
              className="col-span-3"
              disabled={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name :
            </Label>
            <Input
              defaultValue={data.product_name}
              {...register("product_name")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description :
            </Label>
            <Input
              type="text"
              defaultValue={data.description}
              {...register("description")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
              Stock :
            </Label>
            <Input
              defaultValue={data.stock}
              {...register("stock")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="originalprice" className="text-right">
              (Orig) Price :
            </Label>
            <Input
              defaultValue={data.original_price}
              {...register("original_price")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="sellingprice" className="text-right">
              (Sell) Price :
            </Label>
            <Input
              defaultValue={data.selling_price}
              {...register("selling_price")}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={updateProductMutation.isPending}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
