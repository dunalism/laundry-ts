import { TransctColDetail } from "@/lib/definition";
import { ColumnDef } from "@tanstack/react-table";

export const transctcols: ColumnDef<TransctColDetail>[] = [
  { accessorKey: "transcDate", header: "Transaction date" },
  { accessorKey: "products", header: "Laundry package" },
  { accessorKey: "amount", header: "Amount" },
  { accessorKey: "totalPayment", header: "Total payment" },
];
