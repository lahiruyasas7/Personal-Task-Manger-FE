'use client'
import React from "react";
import TodayTasks from "../components/MyTasks/TodayTasks";
import TomorrowTasks from "../components/MyTasks/TomorrowTasks";

function MyTasks() {
  return (
    <div className="flex flex-col">
      <TodayTasks />
      <TomorrowTasks/>
    </div>
  );
}

export default MyTasks;
