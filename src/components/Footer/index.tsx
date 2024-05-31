"use client"
import React from "react";
import { CustomLink } from "../Buttons";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const routeOptions = {
    contacts: ["/groups", "/contacts"],
  };
  const isOnContacts = routeOptions.contacts.includes(pathname);
  return (
    <div className={`flex flex-col w-full ${isOnContacts ? 'pl-[363px]': 'hidden'}`}>
      <div className="flex flex-col px-8 pb-8">
        <div className="flex flex-row justify-start gap-x-2 items-center">
          <CustomLink>Terms of Service</CustomLink>
          <div className="h-3 w-[1px] bg-[#555]" />
          <CustomLink>Website Privacy Policy</CustomLink>
          <div className="h-3 w-[1px] bg-[#555]" />
          <CustomLink>Services Policy</CustomLink>
        </div>
        <p className="text-xs text-[#999999]">{`Copyright © ${new Date().getFullYear()}. EZ Texting All rights reserved.`}</p>
      </div>
    </div>
  );
};

export default Footer;
