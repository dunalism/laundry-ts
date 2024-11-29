import { UsersData } from "@/lib/definition";
import { ColumnDef } from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { PencilLineIcon, Trash2 } from "lucide-react";

export const usercols: ColumnDef<UsersData>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "username", header: "Username" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "role", header: "Role" },
  { accessorKey: "createdAt", header: "Created at" },
  {
    id: "actions",
    accessorKey: "Actions",
    cell: ({ row }) => {
      const users = row.original;
      return (
        <div data-rows="actions" className="flex gap-3 ">
          <TooltipProvider disableHoverableContent={true} delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <PencilLineIcon
                  onClick={() => console.log(users.name)}
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
