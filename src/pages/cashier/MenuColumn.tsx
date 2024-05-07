import { Product } from "@/types/Products";
import { formatToPHP } from "@/utils/formatToPHP";
import { ColumnDef } from "@tanstack/react-table";
import SelectedQuantity from "./SelectedQuantity";

export const MenuColumn: ColumnDef<Product>[] = [
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
    accessorKey: "selling_price",
    header: "Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("selling_price"));
      return formatToPHP(price);
    },
  },
  {
    header: "Action",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <SelectedQuantity
          id={data.id}
          product_name={data.product_name}
          stock={data.stock}
          original_price={data.original_price}
          selling_price={data.selling_price}
        />
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
