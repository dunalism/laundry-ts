import { Products } from "@/lib/definition";
import { ColumnDef } from "@tanstack/react-table";
import { PencilLineIcon, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { deleteProduct } from "@/lib/crud";
import { toast } from "react-toastify";

export const columns = (
  filterProduct: (id: number) => void,
  token: string,
  id: number,
  setId: React.Dispatch<any>
): ColumnDef<Products>[] => [
  // {belum diperlukan
  //   id: "select",
  //   header: ({ table }) => {
  //     const isIndeterminate =
  //       table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected();
  //     return (
  //       <input
  //         type="checkbox"
  //         checked={table.getIsAllPageRowsSelected()}
  //         ref={(el) => {
  //           if (el) el.indeterminate = isIndeterminate; // Set the indeterminate state
  //         }}
  //         onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
  //         aria-label="Select all"
  //         className="checkbox"
  //       />
  //     );
  //   },
  //   cell: ({ row }) => (
  //     <input
  //       type="checkbox"
  //       className="checkbox"
  //       checked={row.getIsSelected()}
  //       ref={(el) => {
  //         if (el) el.indeterminate = row.getIsSomeSelected();
  //       }}
  //       onChange={(e) => {
  //         e.stopPropagation();
  //         row.toggleSelected(e.target.checked);
  //       }}
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: true,
  // },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "price", header: "Price" },
  { accessorKey: "type", header: "Type" },
  {
    id: "actions",
    accessorKey: "Actions",
    cell: ({ row }) => {
      const onDelete = async (id: number) => {
        const response = await deleteProduct(id, token);
        filterProduct(id);
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
                    const modal = document.getElementById("editProduct");
                    modal?.click();
                  }}
                  className="text-blue-500 dark:text-violet-500 theme-luxury:text-violet-500 "
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
                    const modal = document.getElementById(
                      "confirmDeleteProduct"
                    );
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
            id="deleteProduct"
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
