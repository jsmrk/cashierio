import { Product } from "@/types/Products";
import { formatToPHP } from "@/utils/formatToPHP";
import { ColumnDef } from "@tanstack/react-table";
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";

export const InventoryColumn: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "product_name",
    header: "Products",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "stock",
    header: "Stocks",
  },
  {
    accessorKey: "original_price",
    header: "(Orig) Price",
    cell: ({ row }) => {
      const originalPrice = parseFloat(row.getValue("original_price"));
      return formatToPHP(originalPrice);
    },
  },
  {
    accessorKey: "selling_price",
    header: "(Sell) Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("selling_price"));
      return formatToPHP(price);
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex gap-4 justify-center">
          <UpdateProduct
            id={data.id}
            product_name={data.product_name}
            stock={data.stock}
            original_price={data.original_price}
            selling_price={data.selling_price}
            description={data.description}
          />
          <DeleteProduct id={data.id} />
        </div>
      );
    },
  },
  // {
  //   accessorKey: "date",
  //   header: "Date & Time"
  //   cell: ({ row }) => {
  //     const date = new Date(row.getValue("date"));
  //     const formattedDateTime = new Intl.DateTimeFormat("en-PH", {
  //       month: "long",
  //       day: "numeric",
  //       year: "numeric",
  //       hour: "numeric",
  //       minute: "numeric",
  //       hour12: true,
  //     }).format(date);

  //     return <div>{formattedDateTime}</div>;
  //   },
  // },
];
