"use client";

import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Checkbox } from "@/components/ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => {
      const isIndeterminate =
        table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected();
      // <Checkbox
      //   checked={
      //     table.getIsAllPageRowsSelected() ||
      //     (table.getIsSomePageRowsSelected() && "indeterminate")
      //   }
      //   onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      //   aria-label="Select all"
      // />
      return (
        <input
          type="checkbox"
          checked={table.getIsAllPageRowsSelected()}
          ref={(el) => {
            if (el) el.indeterminate = isIndeterminate; // Set the indeterminate state
          }}
          onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
          aria-label="Select all"
          className="checkbox"
        />
      );
    },
    cell: ({ row }) => (
      // <Checkbox
      //   checked={row.getIsSelected()}
      //   onCheckedChange={(value) => row.toggleSelected(!!value)}
      //   aria-label="Select row"
      // />
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        ref={(el) => {
          if (el) el.indeterminate = row.getIsSomeSelected(); // Set the indeterminate state
        }}
        onChange={(e) => {
          e.stopPropagation();
          row.toggleSelected(e.target.checked);
        }}
        aria-label="select row"
        className="checkbox"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <button
          className="btn btn-sm hover:bg-base-100 font-medium btn-ghost "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 mt-[1px] h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
