import React from "react";
import { IoIosNotifications } from "react-icons/io";
import CustomButton from "./CustomButton";

const HeaderBar = () => {
  return (
    <div className="bg-white h-[75px] w-full flex justify-between items-center px-4 rounded-lg">
      <h2 className="text-2xl font-bold text-[#726C6C]">
        Good Morning, <span className="text-black">John Doe</span>
      </h2>
      <div className="flex justify-center items-center gap-4">
        <CustomButton name="Add" />
        <IoIosNotifications size={30} color="#726C6C" />
      </div>
    </div>
  );
};

export default HeaderBar;
