import React from "react";
import CategoryBar from "./CategoryBar";

const MyCategories = () => {
  return (
    <section className="bg-white p-5 rounded-lg mt-5">
      <h3 className="text-3xl font-regular">
        My Categories<span className="text-[#6E7781]"> (4)</span>
      </h3>
      <div className="mt-3">
        <CategoryBar />
        <CategoryBar />
        <CategoryBar />
      </div>
    </section>
  );
};

export default MyCategories;
