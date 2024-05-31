"use client";

import { IconButton } from "@/components/Buttons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ContactGroup } from "@/lib/helper";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, FilePenLine, MoreHorizontal, Send } from "lucide-react";

export const createColumns = (handleEdit:(row: ContactGroup) => void): ColumnDef<ContactGroup>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="w-5 h-5 border-[#c4c8cc] rounded-[2px]"
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="w-5 h-5 border-[#c4c8cc] rounded-[2px]"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          className="text-base text-[#008AD4] font-normal px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "contacts",
    header: ({ column }) => {
      return (
        <Button
          className="text-base text-[#008AD4] font-normal px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Contacts
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    id: "actions",
    header: "Send",
    cell: ({ row }) => (
      <div className="flex flex-row justify-start pl-2">
        <IconButton onClick={() => console.log(row)}>
          <Send size={17} color="#008ad4" />
        </IconButton>
      </div>
    ),
  },
  {
    id: "actions",
    header: "Edit",
    cell: ({ row }) => (
      <div className="flex flex-row justify-start pl-2">
        <IconButton onClick={() => handleEdit(row.original)}>
          <FilePenLine size={17} color="#008ad4" />
        </IconButton>
      </div>
    ),
  },
];
