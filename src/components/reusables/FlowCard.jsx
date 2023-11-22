import { Box, Typography } from "@mui/material";
import React from "react";

const FlowCard = (props) => {
  const { icon, title, content, color, index } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          boxShadow: "4px 3px 7px 2px rgba(232,232,232,1)",
          borderRadius: "10px",
          cursor: "pointer",
          backgroundColor: "white",
          width: "230px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 3.5,
          px: 1.5,
        }}
      >
        <img
          src={icon}
          alt="projectSubmission"
          style={{ width: "110px", height: "110px" }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "Bold", my: 3 }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ color: "#8C91A3", width: "90%", textAlign: "center" }}
        >
          {content}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: color,
          width: "40px",
          height: "40px",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Typography variant="h5" sx={{ color: "white", fontWeight: "Bold" }}>
          {index + 1}
        </Typography>
      </Box>
    </Box>
  );
};

export default FlowCard;
