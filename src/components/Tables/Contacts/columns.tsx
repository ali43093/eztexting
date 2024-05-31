"use client";

import { IconButton } from "@/components/Buttons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Contact } from "@/lib/helper";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, FilePenLine, Send } from "lucide-react";

export const columns: ColumnDef<Contact>[] = [
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
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <Button
          className="text-base text-[#008AD4] font-normal px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          className="text-base text-[#008AD4] font-normal px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <Button
          className="text-base text-[#008AD4] font-normal px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "groups",
    header: "Groups",
    cell: ({ row }) => <div className="uppercase">{row.original.groups.join(", ")}</div>,
  },
  {
    accessorKey: "source",
    header: "Source",
  },
  {
    accessorKey: "Added",
    header: ({ column }) => {
      return (
        <Button
          className="text-base text-[#008AD4] font-normal px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Added
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.original.addedDate);
      const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, "0")}-${date
        .getDate()
        .toString()
        .padStart(2, "0")}-${date.getFullYear()} ${date.toLocaleTimeString("en-US", { hour12: true })}`;
      return <div>{formattedDate}</div>;
    },
  },
];
