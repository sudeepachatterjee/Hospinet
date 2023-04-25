import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function LoginButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const patientpage = async (event) => {
    event.preventDefault();
    navigate("/patientLogin");
  }
  const pharmacypage = async (event) => {
    event.preventDefault();
    navigate("file:///C:/Users/subha/OneDrive/Desktop/Hospital/online%20prescription%20system/pharma.html");
  }
  const doctorpage = async (event) => {
    event.preventDefault();
    navigate("/login");
  }

  return (
    <div>
      <Button
        id="basic-button"
        variant="contained"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Login
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem onClick={patientpage}>Patient</MenuItem>
        <MenuItem onClick={doctorpage}>Doctor</MenuItem>
        <MenuItem component={Link} to="http://127.0.0.1:5500/pharma.html">Pharmacy</MenuItem>
      </Menu>
    </div>
  );
}
