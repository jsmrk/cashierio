import { SelectedProduct } from "@/types/SelectedProducts";
import { formatToPHP } from "@/utils/formatToPHP";
import { ColumnDef } from "@tanstack/react-table";

export const CashierColumn: ColumnDef<SelectedProduct>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "product_name",
    header: "Products",
  },
  {
    accessorKey: "quantity",
    header: "QTY",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      return formatToPHP(price);
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
