import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const TaskBar = () => {
  return (
    <div className="w-full h-[85px] border-b-1 border-[#DCE4ED] flex justify-between items-center cursor-pointer">
      <h3><span>01) </span>Need to do home work</h3>
      <CiCircleCheck size={30}/>
    </div>
  );
};

export default TaskBar;
