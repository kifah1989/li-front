import { Button } from "@mui/material";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import SearchField from "./SearchField";

export default function TopNavbar() {
  return (
    <div
      id="navbar"
      className="flex flex-row justify-around border border-black"
    >
      <div id="left" className="flex flex-row items-center">
        <CameraIcon sx={{ mr: 2 }} />
        <h6>Lii</h6>
      </div>
      <div id="right side" className="flex flex-row">
        <SearchField />
        <Button color="inherit">Login</Button>
      </div>
    </div>
  );
}
