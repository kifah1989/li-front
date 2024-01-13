import {
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  InputLabel,
  FormControl,
} from "@mui/material";

import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";

export default function SearchField() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <TextField
      id="input-with-icon-textfield"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <FormControl className="m-1 w-[70px] border border-red-400">
              <InputLabel id="demo-simple-select-autowidth-label">
                Age
              </InputLabel>
              <Select
                className="border border-red-400 text-red-500"
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
          </InputAdornment>
        ),
      }}
    />
  );
}
