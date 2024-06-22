import React from "react";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "orangered", // Default color
  color: "white",
  fontSize: "0.6rem",
  border:"none",
  borderRadius: "10px",
  fontWeight: "bold",
  textTransform: "uppercase",
  height: 20, // Adjust height to make it smaller
  padding: "12px 2px", // Adjust padding as needed
  "& .MuiChip-icon": {
    color: "white",
    fontSize: "1rem",
    marginLeft: 4,
  },
}));

const CustomChip = ({ text, icon, color }) => {
  return (
    <StyledChip
      style={{ backgroundColor: color, marginLeft:"10px" }} // Dynamically set background color
      icon={icon}
      label={
        <Typography
          variant="body2"
          sx={{ fontSize: "0.6rem", fontWeight: "bold" }}
        >
          {text}
        </Typography>
      }
      variant="outlined"
    />
  );
};

export default CustomChip;
