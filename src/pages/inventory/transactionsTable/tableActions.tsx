import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDeleteProduct } from "@/services/mutation";

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

export const UpdateButton: React.FC<{ id?: number }> = ({ id }) => {
  const deleteProductMutation = useDeleteProduct();

  const handleDelete = async () => {
    if (!id) {
      console.error("Missing product ID for deletion.");
      return;
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
