import React from "react";
import { sidebarItems } from "@/lib/helper";

const Sidebar = () => {
  return (
    <div style={{ height: "calc(100% - 64px)" }} className="fixed top-16 w-[88px] bg-black left-0 overflow-x-hidden overflow-y-auto lg:flex hidden flex-col">
      {sidebarItems.map((item) => (
        <div key={item.id} className={`flex flex-col items-center p-2 text-[11px] gap-y-1 cursor-pointer hover:text-white ${item.id === 1 ? "text-white font-bold" : "text-[#aaa]"}`}>
          {item.icon}
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
