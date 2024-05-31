import { Table } from "@tanstack/react-table";

import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {

  const pagination = table.getState().pagination;
  const totalRows = table.getCoreRowModel().rows.length;
  const rowsPerPage = pagination.pageSize;
  const startRow = (pagination.pageIndex * rowsPerPage) + 1;
  const endRow = Math.min(startRow + rowsPerPage - 1, totalRows);

  return (
    <div className="flex items-center justify-between px-2 w-full">
      <div className="flex items-center space-x-2">
        <Button variant="link" className="h-8 w-8 p-0 hover:bg-[#f6f6f6]" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
          <span className="sr-only">Go to first page</span>
          <ChevronsLeft color="#404040" className="h-4 w-4" />
        </Button>
        <Button variant="link" className="h-10 w-16 p-0 hover:bg-[#f6f6f6] hover:no-underline" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          <div className="flex flex-row items-center">
            <ChevronLeft color="#404040" className="h-4 w-4" />
            Prev
          </div>
        </Button>
        <div className="bg-[#f6f6f6] text-sm text-black py-2 px-3 rounded-[5px]">{startRow}-{endRow} of {totalRows}</div>
        <Button variant="link" className="h-10 w-16 p-0 hover:bg-[#f6f6f6] hover:no-underline" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          <div className="flex flex-row items-center">
            Next
            <ChevronRight color="#404040" className="h-4 w-4" />
          </div>
        </Button>
        <Button variant="link" className="h-8 w-8 p-0 hover:bg-[#f6f6f6]" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
          <span className="sr-only">Go to last page</span>
          <ChevronsRight color="#404040" className="h-4 w-4" />
        </Button>
      </div>
      

      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[55px] px-2 py-2 bg-[#f6f6f6]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent className="w-[65px]" side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem className="w-[65px] px-1" key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm font-medium">Rows per page</p>
        </div>
      </div>
    </div>
  );
}
