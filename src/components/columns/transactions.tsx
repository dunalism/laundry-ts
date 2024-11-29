import { TransctCol } from "@/lib/definition";
import { ColumnDef } from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { PencilLineIcon, Trash2 } from "lucide-react";

export const transctcols: ColumnDef<TransctCol>[] = [
  { accessorKey: "custName", header: "Customer name" },
  { accessorKey: "totalTransc", header: "Amount of transaction" },
  {
    id: "detail",
    accessorKey: "Transaction details",
    cell: ({ row }) => {
      const transc = row.original;
      return (
        <div data-rows="actions" className="flex gap-3 ">
          <TooltipProvider disableHoverableContent={true} delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <PencilLineIcon
                  onClick={() => console.log(transc.custId)}
                  className="text-blue-500 "
                />
              </TooltipTrigger>
              <TooltipContent>Edit</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider disableHoverableContent={true} delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <Trash2 className="text-red-500 " />
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
