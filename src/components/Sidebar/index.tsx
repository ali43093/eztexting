"use client";
import React from "react";
import { secondSidebarOptions, sidebarItems } from "@/lib/helper";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const navigation = useRouter()
  const routeOptions = {
    contacts: ["/groups", "/contacts", "/custom-contact-fields"],
  };
  const isOnContacts = routeOptions.contacts.includes(pathname);
  return (
    <>
      <div style={{ height: "calc(100% - 64px)" }} className="fixed top-16 w-[88px] bg-black left-0 overflow-x-hidden overflow-y-auto lg:flex hidden flex-col">
        {sidebarItems.map((item) => (
          <div onClick={() => navigation.push(item.url)} key={item.id} className={`flex flex-col items-center p-2 text-[11px] gap-y-1 cursor-pointer hover:text-white ${item.id === 1 ? "text-white font-bold" : "text-[#aaa]"}`}>
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>
      {isOnContacts ? (
        <div
          style={{ height: "calc(100% - 64px)" }}
          className="fixed top-16 w-[275px] bg-[#f9fafc] left-[88px] overflow-x-hidden overflow-y-auto border-0 border-r border-r-[#E6E6E6] border-solid lg:flex hidden flex-col pt-6"
        >
          <div>
            <h2 className="px-4 mb-4 pointer-events-none text-[#000000DE] text-lg font-bold">Contacts</h2>
            <div className="flex flex-col px-4">
              <h2 className="mt-4 pointer-events-none text-[#000000DE] text-sm font-semibold tracking-wide uppercase">{secondSidebarOptions.contacts.title}</h2>
              <div className="flex flex-col py-2">
                {secondSidebarOptions.contacts.items.map((item, i) => (
                  <h3 onClick={() => navigation.push(item.url)} className={`px-4 text-sm py-[10px] cursor-pointer ${pathname === item.url ? "bg-[#d8e4ee]" : ""} ${pathname === item.url ? "" : "hover:bg-[#f3f5f9]"} rounded-[2rem]`} key={i}>
                    {item.title}
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
