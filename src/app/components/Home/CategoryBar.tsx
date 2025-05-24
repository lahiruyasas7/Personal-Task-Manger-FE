import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";

const CategoryBar = () => {
  return (
    <div className="w-full h-[65px] border-b-1 border-[#DCE4ED] flex justify-start gap-5 items-center cursor-pointer">
      <MdOutlineWorkOutline size={30} />
      <h3>Work</h3>
    </div>
  );
};

export default CategoryBar;
