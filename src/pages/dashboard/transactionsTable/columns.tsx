import { ColumnDef } from "@tanstack/react-table";

export type recentTransactions = {
  id: number;
  customer: string;
  order: string[];
  totalPayment: number;
  date: Date;
};

export const columns: ColumnDef<recentTransactions>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "totalPayment",
    header: "Total Payment",
    cell: ({ row }) => {
      const totalPayment = parseFloat(row.getValue("totalPayment"));
      const formatted = new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
      }).format(totalPayment);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "date",
    header: "Date & Time",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const formattedDateTime = new Intl.DateTimeFormat("en-PH", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(date);

      return <div>{formattedDateTime}</div>;
    },
  },
];
