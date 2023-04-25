import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ChipsArray() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ marginLeft: "31vh", marginTop: 2 }}
    >
      <Chip
        label="Family Medicine"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip label="Pediatrics" onClick={handleClick} onDelete={handleDelete} />
      <Chip
        label="Top Hospital"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip label="Telehealth" onClick={handleClick} onDelete={handleDelete} />
      <Chip label="COVID-19" onClick={handleClick} onDelete={handleDelete} />
      <Chip
        label="Orthopedic Surgery"
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </Stack>
  );
}
