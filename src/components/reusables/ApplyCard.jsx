import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "./Button";

const ApplyCard = (props) => {
  const { icon, title, content, btnName } = props;
  return (
    <Box
      sx={{
        width: "48%",
        backgroundColor: "#34ABEF",
        borderRadius: "30px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          border: "8px solid #34ABEF",
          width: "135px",
          height: "135px",
          borderRadius: "100px",
          position: "absolute",
          top: -80,
          right: 225,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={icon}
          alt="projectSubmission"
          style={{ width: "80px", height: "80px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 11,
          pb: 3,
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: "Bold", color: "#ffffff" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            mt: 2,
            mb: 4,
            color: "#ffffff",
            width: "79%",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          {content}
        </Typography>

        <Button label={btnName} inverse />
      </Box>
    </Box>
  );
};

export default ApplyCard;
