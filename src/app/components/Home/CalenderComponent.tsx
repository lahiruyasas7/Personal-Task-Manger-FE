import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalenderComponent = () => {
  const today = new Date();
  return (
    <div className="bg-white p-5 rounded-lg mt-5 lg:w-1/3">
      <Calendar value={today} />
    </div>
  );
};

export default CalenderComponent;
