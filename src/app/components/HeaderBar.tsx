import React from "react";
import { IoIosNotifications } from "react-icons/io";

const HeaderBar = () => {
  return (
    <div className="bg-white h-[75px] w-full flex justify-between items-center px-4 rounded-lg">
      <h2 className="text-2xl font-bold text-[#726C6C]">
        Good Morning, <span className="text-black">John Doe</span>
      </h2>
      <IoIosNotifications size={30} color="#726C6C" />
    </div>
  );
};

export default HeaderBar;
