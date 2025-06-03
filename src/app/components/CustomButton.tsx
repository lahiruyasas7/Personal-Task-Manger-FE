'usw client'
import React from "react";
import Button from "@mui/material/Button";
import { IoMdAdd } from "react-icons/io";

function CustomButton({ name }: { name: string }) {
  return (
    <div>
      <Button variant="contained" startIcon={<IoMdAdd />}>Add</Button>
    </div>
  );
}

export default CustomButton;
