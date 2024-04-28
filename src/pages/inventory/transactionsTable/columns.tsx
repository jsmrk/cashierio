import { Products } from "@/types/Products";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Products",
  },
  {
    accessorKey: "stock",
    header: "Stocks",
  },
  {
    accessorKey: "originalPrice",
    header: "(Orig) Price",
    cell: ({ row }) => {
      const totalPayment = parseFloat(row.getValue("originalPrice"));
      const formatted = new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
      }).format(totalPayment);

      return <div> {formatted}</div>;
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const totalPayment = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
      }).format(totalPayment);

      return <div> {formatted}</div>;
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
