import { InputAdornment, TextField } from "@mui/material";
import { Dropdown } from "flowbite-react";
import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  return (
    <div className="flex">
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CiSearch />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Dropdown
        className="bg-black border border-amber-700"
        label="All"
        dismissOnClick={false}
      >
        <Dropdown.Item>lebanese</Dropdown.Item>
        <Dropdown.Item>syrian</Dropdown.Item>
        <Dropdown.Item>Khaliji</Dropdown.Item>
      </Dropdown>
    </div>
  );
}
