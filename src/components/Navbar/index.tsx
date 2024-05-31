"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { sidebarItems } from "@/lib/helper";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full h-[64px] px-6 flex items-center gap-x-4 border-b border-solid border-[#e6e6e6] z-10 bg-white">
      <div className="lg:hidden flex cursor-pointer">
        {openDrawer ? <X onClick={() => setOpenDrawer(!openDrawer)} color="#000" /> : <Menu onClick={() => setOpenDrawer(!openDrawer)} color="#000" />}
      </div>
      <Image src={"/icons/ez-logo.png"} alt="EZ logo" width={135} height={44} />
      {openDrawer && <div style={{ height: "calc(100% - 64px)" }} className="fixed top-16 inset-0 bg-black opacity-50 z-50" onClick={() => setOpenDrawer(false)} />}
      <div
        style={{ height: "calc(100% - 64px)" }}
        className={`fixed top-16 left-0 w-64 bg-black text-white transition-all duration-300 ease-in-out transform ${openDrawer ? "translate-x-0" : "-translate-x-full"} z-50`}
      >
        <div className="flex flex-col w-full p-4">
          {sidebarItems.map((item) => (
            <div key={item.id} className="flex flex-row w-full justify-start items-center gap-x-3 pl-4 text-xs text-[#aaa] hover:text-white h-[48px] cursor-pointer">
              {item.icon}
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
