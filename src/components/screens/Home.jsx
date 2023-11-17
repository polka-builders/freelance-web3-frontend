import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeSVG from "../images/home.svg";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
            Logo
          </Typography>
          <Typography variant="subtitle1" component="div">
            Home
          </Typography>
          <Typography variant="subtitle1" component="div">
            Categories
          </Typography>
          <Typography variant="subtitle1" component="div">
            Our Freelancers
          </Typography>
          <Typography variant="subtitle1" component="div">
            Contact Us
          </Typography>
          <Button variant="outlined" sx={{ fontWeight: "bold" }}>
            Apply Now
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Hire Now
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          backgroundColor: "#F5FCFF",
        }}
      >
        <Box
          sx={{
            width: "75%",
            display: "flex",
            justifyContent: "space-between",
            py: 12,
          }}
        >
          <Box sx={{ width: "47%" }}>
            <Typography
              variant="h3"
              component="div"
              sx={{ fontWeight: "Bold" }}
            >
              The Freelancer's Arena Where Professionals Connect with Prospects
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ mt: 1, mb: 5 }}
              color="#8C91A3"
            >
              Navigating the freelance landscape has never been this intuitive.
              Join a community that values your expertise and introduces you to
              genuine prospects.
            </Typography>
            <Button
              variant="contained"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Apply as Freelancer
            </Button>
            <Button
              variant="outlined"
              sx={{ fontWeight: "bold", ml: 4, backgroundColor: "white" }}
            >
              Hire Freelancer
            </Button>
          </Box>
          <Box sx={{ width: "47%" }}>
            <img
              src={require("../images/home.svg").default}
              alt="mySvgImage"
              style={{ width: "500px", height: "500px" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
