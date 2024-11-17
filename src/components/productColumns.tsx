import { Products } from "@/lib/definition";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Products>[] = [
  {
    id: "select",
    header: ({ table }) => {
      const isIndeterminate =
        table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected();
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
      <input
        type="checkbox"
        className="checkbox"
        checked={row.getIsSelected()}
        ref={(el) => {
          if (el) el.indeterminate = row.getIsSomeSelected();
        }}
        onChange={(e) => {
          e.stopPropagation();
          row.toggleSelected(e.target.checked);
        }}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
];
