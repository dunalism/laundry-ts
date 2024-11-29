import { Customers } from "@/lib/definition";
import { ColumnDef } from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { PencilLine, Trash2 } from "lucide-react";

export const custcols: ColumnDef<Customers>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "phoneNumber", header: "Phone number" },
  { accessorKey: "address", header: "Address" },
  { accessorKey: "createdAt", header: "Created at" },
  {
    id: "actions",
    accessorKey: "Actions",
    cell: ({ row }) => {
      const customers = row.original;
      return (
        <div data-rows="actions" className="flex gap-3">
          <TooltipProvider disableHoverableContent={true} delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <PencilLine
                  onClick={() => console.log(customers.name)}
                  className="text-blue-500"
                />
              </TooltipTrigger>
              <TooltipContent>Edit</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider disableHoverableContent={true} delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <Trash2
                  onClick={() => console.log(customers.name)}
                  className="text-red-500"
                />
              </TooltipTrigger>
              <TooltipContent>Delete</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
    enableHiding: false,
  },
];
