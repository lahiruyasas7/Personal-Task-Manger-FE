import React from "react";
import TaskBar from "./TaskBar";

const MyTasksComponent = () => {
  return (
    <section className="bg-white p-5 rounded-lg mt-5 lg:w-2/3">
      <h3 className="text-3xl font-regular">
        My Tasks<span className="text-[#6E7781]"> (4)</span>
      </h3>
      <div className="mt-3">
        <TaskBar />
        <TaskBar />
        <TaskBar />
        <TaskBar />
      </div>
    </section>
  );
};

export default MyTasksComponent;
