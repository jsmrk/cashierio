import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDeleteProduct } from "@/services/mutation";
import UpdateProduct from "@/components/UpdateProductDialogue";
import { Product } from "@/types/Products";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const DeleteButton: React.FC<{ id?: number }> = ({ id }) => {
  const deleteProductMutation = useDeleteProduct();

  const handleDelete = async () => {
    if (!id) {
      console.error("Missing product ID for deletion.");
      return console.log("ID undefined");
    }

    await deleteProductMutation.mutateAsync(id);
    console.log("Success");
  };

  return (
    <button onClick={handleDelete}>
      <FontAwesomeIcon className="text-red-300" icon={faTrash} />
    </button>
  );
};

export const UpdateButton = (data: Product) => {
  return (
    <UpdateProduct
      id={data.id}
      product_name={data.product_name}
      stock={data.stock}
      original_price={data.original_price}
      selling_price={data.selling_price}
      description={data.description}
    />
  );
};
