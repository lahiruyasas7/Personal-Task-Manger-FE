"use client";
import React from "react";
import TodayTasks from "../components/MyTasks/TodayTasks";
import TomorrowTasks from "../components/MyTasks/TomorrowTasks";
import ThisWeekTasks from "../components/MyTasks/ThisWeekTasks";

function MyTasks() {
  return (
    <div className="flex flex-col">
      <TodayTasks />
      <TomorrowTasks />
      <ThisWeekTasks />
    </div>
  );
}

export default MyTasks;
