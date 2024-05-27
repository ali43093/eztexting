"use client";
import { LinkButton } from "@/components/Buttons";
import { CustomSelect } from "@/components/CustomSelect";
import { bannerData, dashboardData, dashboardFilterOptions } from "@/lib/utils";
import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";

const Dashboard = () => {
  const [filter, setFilter] = useState(1);

  const renderCard = ({ title, value }: { title: string; value: number }) => (
    <div className="flex flex-col w-full bg-[#00000026] hover:bg-[#017dbc1a] lg:py-[40px] py-[24px] px-[24px] text-white">
      <p className="text-base">{title}</p>
      <p className="lg:text-[40px] md:text-[34px] text-[28px] font-semibold lg:leading-[55px] md:leading-[45px] leading-[38px]">{value.toLocaleString()}</p>
    </div>
  );

  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-col w-full max-w-screen-xl md:pt-24 pt-20 md:p-8 p-4 gap-y-6">
        <div className="flex md:flex-row flex-col w-full md:justify-between justify-start md:items-center items-start align-baseline my-4 gap-3">
          <h1 className="lg:text-[32px] md:text-[28px] text-[24px] font-bold">Hi {dashboardData.name} 👋</h1>
          <div className="flex flex-row justify-start items-center gap-2">
            <FiPhone color="#85898C" size={24} />
            <p className=" text-[#3d3e40] text-left text-[17px]">{dashboardData.phoneCount.toLocaleString()}</p>
            <LinkButton>Manage</LinkButton>
          </div>
        </div>
        <CustomSelect value={filter} onChange={(val) => setFilter(val)} options={dashboardFilterOptions} />
        <div className="flex md:flex-row flex-col w-full justify-evenly gap-2 cardGradient rounded-[8px] cursor-pointer overflow-hidden">
          <div className="flex flex-row md:w-1/2 w-full justify-evenly gap-2">
            <div className="flex flex-row w-1/2 justify-evenly gap-x-2">{renderCard(bannerData?.inMsg)}</div>
            <div className="flex flex-row w-1/2 justify-evenly gap-x-2">{renderCard(bannerData?.sentMsg)}</div>
          </div>
          <div className="flex flex-row md:w-1/2 w-full justify-evenly gap-2">
            <div className="flex flex-row w-1/2 justify-evenly gap-x-2">{renderCard(bannerData?.optInContacts)}</div>
            <div className="flex flex-row w-1/2 justify-evenly gap-x-2">{renderCard(bannerData?.optOutContacts)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
