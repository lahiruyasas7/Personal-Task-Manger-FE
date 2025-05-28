import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSettings } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { PiListThin } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";

const NavigationBar = () => {
  return (
    <nav className="flex flex-col w-[305px] bg-white rounded-lg h-screen relative">
      <div className="flex flex-col justify-center items-center p-[32px] gap-2 w-full">
        <div className="relative h-[120px] w-[120px] rounded-full border-2 overflow-hidden">
          <Image
            alt="profile-image"
            src="/custom-images/sample-avatar.png"
            fill
            className="object-scale-down"
          />
        </div>
        <h4 className="text-xl font-bold">John Doe</h4>
      </div>
      <ul>
        <li className="h-[65px] flex justify-start items-center pl-[20px] gap-[20px] cursor-pointer hover:bg-[#b5eef0]">
          <RxDashboard size={25} className="text-[#30AAAC]" />
          <Link href="/" className="text-lg font-bold text-[#30AAAC]">
            DASHBOARD
          </Link>
        </li>
        <li className="h-[65px] flex justify-start items-center pl-[20px] gap-[20px] cursor-pointer hover:bg-[#b5eef0]">
          <FaTasks size={25} className="text-[#30AAAC]" />
          <Link href="/my-tasks" className="text-lg font-bold text-[#30AAAC]">
            MY TASKS
          </Link>
        </li>
        <li className="h-[65px] flex justify-start items-center pl-[20px] gap-[20px] cursor-pointer hover:bg-[#b5eef0]">
          <PiListThin size={25} className="text-[#30AAAC]" />
          <Link href="/" className="text-lg font-bold text-[#30AAAC]">
            CATEGORIES
          </Link>
        </li>
        <li className="h-[65px] flex justify-start items-center pl-[20px] gap-[20px] cursor-pointer hover:bg-[#b5eef0]">
          <CiSettings size={25} className="text-[#30AAAC]" />
          <Link href="/" className="text-lg font-bold text-[#30AAAC]">
            SETTINGS
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-16">
        <li className="h-[65px] flex justify-start items-center pl-[20px] gap-[20px] cursor-pointer hover:bg-[#b5eef0] list-none">
          <IoIosLogOut size={25} className="text-[#30AAAC]" />
          <Link href="/" className="text-lg font-bold text-[#30AAAC]">
            LOG OUT
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default NavigationBar;
