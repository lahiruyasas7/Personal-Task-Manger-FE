"use client";
import { tasksData } from "@/app/mock-data";
import { MyTasks } from "@/app/types/my-tasks.types";
import React from "react";
import DataTable from "react-data-table-component";
import { CiCircleCheck } from "react-icons/ci";

function TodayTasks() {
  const columns1 = [
    {
      name: "Today",
      sortable: true,
      //center: false,
      cell: (row: MyTasks) => {
        return (
          <div className="flex gap-2 justify-start items-center">
            <CiCircleCheck size={30} />
            <h3>{row.title}</h3>
          </div>
        );
      },
      width: "250px",
    },
    {
      name: "Due Date",
      sortable: true,
      width: "200px",
      center: true,
      selector: (row: MyTasks) => row.dueDate,
    },
    {
      name: "Status",
      sortable: true,
      width: "200px",
      selector: (row: MyTasks) => row.status,
    },
    {
      name: "Description",
      sortable: true,
      width: "300px",
      selector: (row: MyTasks) => row.description,
    },
  ];

  const stylesForTable = {
    headCells: {
      style: {
        fontSize: "13px",
        fontWeight: "600",
        color: "#4B465C",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        fontWeight: "700",
        color: "#4B465C",
      },
    },
  };

  return (
    <section className="bg-white p-5 rounded-lg mt-5 w-full">
      <DataTable
        data={tasksData}
        columns={columns1}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5]}
        style={{ fontSize: "16px" }}
        fixedHeader
        highlightOnHover
        customStyles={stylesForTable}
        //onChangePage={handlePageChange}
        paginationServer
        //paginationTotalRows={allDesignerData?.meta?.totalItems}
      />
    </section>
  );
}

export default TodayTasks;
