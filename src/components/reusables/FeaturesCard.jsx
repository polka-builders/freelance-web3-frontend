import { Box, Typography } from "@mui/material";
import React from "react";

const FeaturesCard = (props) => {
  const { title, content, icon } = props;
  return (
    <Box
      sx={{
        boxShadow: "4px 3px 7px 2px rgba(232,232,232,1)",
        borderRadius: "10px",
        px: 2,
        py: 1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Box sx={{ width: "15%" }}>
        <img
          src={icon}
          alt="searchUser"
          style={{ width: "74px", height: "74px" }}
        />
      </Box>
      <Box sx={{ width: "80%" }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: "Bold" }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ mt: 0.75, color: "#8C91A3", width: "90%" }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeaturesCard;
