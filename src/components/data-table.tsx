"use client";
import * as React from "react";

import { Settings2 } from "lucide-react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableProps<TData extends { id: number }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchBy: string;
  tableOf: string;
}

export function DataTable<TData extends { id: number }, TValue>({
  columns,
  data,
  searchBy,
  tableOf,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const isRowSelected = table.getFilteredSelectedRowModel().rows.length;

  const handleDeleteSelectedRows = () => {
    // Dapatkan ID baris yang dipilih
    const selectedIds = table
      .getFilteredSelectedRowModel()
      .rows.map((row) => row.original.id);

    // Filter data untuk mengecualikan baris yang dipilih
    const updatedData = data.filter((item) => !selectedIds.includes(item.id));

    console.log("selectedIds", selectedIds);
    console.log("updatedData", updatedData);
  };

  return (
    <div className="rounded-md box-border">
      <div className="flex ">
        <div className="flex gap-4 items-center py-4">
          <input
            placeholder="Search"
            value={
              (table.getColumn(`${searchBy}`)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(`${searchBy}`)?.setFilterValue(event.target.value)
            }
            className="max-w-sm input input-sm focus:border-none border-base-300"
          />
          {!!isRowSelected && (
            <button className="btn btn-sm font-medium">Delete selected</button>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-auto hidden text-neutral/70 font-medium theme-sunset:text-base-content/60 btn btn-sm my-auto mr-4  theme-luxury:text-base-content/60 ">
              <Settings2 className="h-4 w-4 mt-[3px]" /> Columns
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <button
          onClick={() => {
            const logout = document.getElementById("dialogex");
            logout?.click();
          }}
          className="btn bg-blue-600 hover:bg-blue-700 text-base-100 text-base dark:bg-violet-600 dark:hover:bg-violet-700 dark:text-white theme-luxury:bg-violet-700 theme-luxury:hover:bg-violet-700 theme-luxury:text-white btn-sm min-h-10 items-center my-auto ml-auto "
        >
          New {tableOf}{" "}
        </button>
      </div>

      <Table className="">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow data-title="tableheader" key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                // data-state={row.getIsSelected() && "selected"}
                // onClick={() => row.toggleSelected(!row.getIsSelected())} // Toggle selection
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex-1 hidden text-sm text-neutral-500">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <button className="hidden" onClick={() => handleDeleteSelectedRows()}>
        {" "}
        yang diklik{" "}
      </button>
    </div>
  );
}
