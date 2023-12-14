import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar
          sx={{
            width: 24,
            height: 24,
            background: "transparent",
            border: "1px solid white",
            transition: "all 0.1s ease",
            "&:hover": { background: "rgb(69, 188, 69)" },
          }}
        />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose} sx={{ fontSize: "12px" }}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: "12px" }}>
          My account
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: "12px" }}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
