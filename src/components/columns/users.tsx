import { UsersData } from "@/lib/definition";
import { ColumnDef } from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { PencilLineIcon, Trash2 } from "lucide-react";
import { deleteProduct } from "@/lib/crud";
import { toast } from "react-toastify";

export const usercols = (
  filterUsers: (id: number) => void,
  token: string,
  id: number,
  setId: React.Dispatch<any>
): ColumnDef<UsersData>[] => [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "username", header: "Username" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "role", header: "Role" },
  { accessorKey: "createdAt", header: "Created at" },
  {
    id: "actions",
    accessorKey: "Actions",
    cell: ({ row }) => {
      const onDelete = async (id: number) => {
        const response = await deleteProduct(id, token);
        filterUsers(id);
        setTimeout(() => {
          toast.success(response?.message);
        }, 250);
      };

      return (
        <div data-rows="actions" className="flex gap-3 ">
          <TooltipProvider disableHoverableContent={true} delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <PencilLineIcon
                  onClick={() => {
                    setId(row.original.id);
                    const modal = document.getElementById("editUsers");
                    modal?.click();
                  }}
                  className="text-blue-500 "
                />
              </TooltipTrigger>
              <TooltipContent>Edit</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider disableHoverableContent={true} delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <Trash2
                  onClick={() => {
                    const modal = document.getElementById("confirmDeleteUser");
                    setId(row.original.id);
                    modal?.click();
                  }}
                  className="text-red-500 "
                />
              </TooltipTrigger>
              <TooltipContent>Delete</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <button
            className="hidden"
            id="deleteUser"
            onClick={() => onDelete(id)}
          >
            hapus
          </button>
        </div>
      );
    },
    enableHiding: false,
  },
];
