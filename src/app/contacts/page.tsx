"use client";
import React, { useState } from "react";

import { DataTable } from "@/components/Tables";
import { contacts, useWindowDimensions } from "@/lib/helper";
import { BlueLink, FilterButton, PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { columns } from "@/components/Tables/Contacts/columns";
import { Download } from "lucide-react";
import SearchBox from "@/components/SearchBox";

const Contacts = () => {
  const { innerWidth } = useWindowDimensions();
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});

  return (
    <section
      style={{ width: innerWidth > 1024 ? "calc(100% - 363px)" : "100%" }}
      className="flex flex-col items-center lg:translate-x-[363px]"
    >
      <div className="flex flex-col w-full md:pt-24 pt-20 md:p-8 p-4 box-border">
        <div className="flex flex-row w-full justify-between mb-4">
          <h1 className="text-[32px] text-[#18191A] font-semibold">Contacts</h1>
          <div className="flex flex-row justify-end gap-x-2">
            <SecondaryButton>CREATE GROUP</SecondaryButton>
            <PrimaryButton>ADD CONTACTS</PrimaryButton>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center items-center">
          <SearchBox placeholder="Search Contacts" />
          <FilterButton>Filters</FilterButton>
        </div>
        <div className="mt-4 border-b">
          <DataTable columns={columns} data={contacts} rowSelection={rowSelection} setRowSelection={setRowSelection} />
          <div className="flex flex-row justify-between mt-8 mb-16">
            <div className="flex flex-row justify-start gap-x-[10px] items-center flex-wrap">
              <BlueLink>Custom Contact Fields</BlueLink>
              <div className="h-4 w-[1px] bg-[#555]" />
              <BlueLink>Manage Blocked Contacts</BlueLink>
              <div className="h-4 w-[1px] bg-[#555]" />
              <BlueLink>Bulk Opt-Out Contacts</BlueLink>
            </div>
            <BlueLink>
              <Download className="mr-1 h-5" />
              Export Contacts
            </BlueLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
