import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDeleteProduct } from "@/services/mutation";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const DeleteProduct: React.FC<{ id?: number }> = ({ id }) => {
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

export default DeleteProduct;
