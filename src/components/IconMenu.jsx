import MenuItem from "@mui/material/MenuItem";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { IoLayers } from "react-icons/io5";

export default function IconMenu({ title, options, maxHeight, width }) {
  const [selected, setSelected] = useState("");
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120, borderRadius: 0, backgroundColor: "#212121" }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          style={{ display: "flex", flexDirection: "row" }}
        >
          {title}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label={title}
          onChange={handleChange}
          sx={{
            maxHeight: { maxHeight },
            width: { width },
            border: "2px solid #fff",
            color: "#fff",
          }}
        >
          {options.map((option) => (
            <MenuItem value={option.value} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <IoLayers style={{ marginRight: "auto", fontSize: 15 }} />
              {option.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
