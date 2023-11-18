import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeSVG from "../images/home.svg";
import FeaturesCard from "../reusables/FeaturesCard";

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
            pt: 10,
            pb: 14,
          }}
        >
          <Box sx={{ width: "55%", marginTop: "9%" }}>
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
          <Box sx={{ width: "40%", marginLeft: "10%" }}>
            <img
              src={require("../images/home.svg").default}
              alt="mySvgImage"
              style={{ width: "500px", height: "500px" }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          backgroundColor: "#ffffff",
        }}
      >
        <Box
          sx={{
            width: "75%",
            height: 550,
            display: "flex",
            justifyContent: "space-between",
            py: 8,
          }}
        >
          <Box
            sx={{
              width: "40%",
              backgroundColor: "#34ABEF",
              borderRadius: "12px",
              px: 8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{ fontWeight: "Bold", color: "white" }}
            >
              Discover What Sets Us Apart!
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ mt: 2, color: "white" }}
            >
              Experience the future of freelancing with Name. Our platform
              connects you with top Web3 talents, streamlining the way you work
              in the decentralized world.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "44%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <FeaturesCard
              icon={require("../images/searchUser.svg").default}
              title="Expertise On-Demand"
              content="Access a curated network of top professionals swiftly"
            />
            <FeaturesCard
              icon={require("../images/shield.svg").default}
              title="Decentralized Security"
              content="Top-tier decentralized security for your projects and transactions"
            />
            <FeaturesCard
              icon={require("../images/internet.svg").default}
              title="Global Collaboration"
              content="Collaborate with global experts, fostering diverse innovation"
            />
            <FeaturesCard
              icon={require("../images/cubes.svg").default}
              title="Web3 Empowered Freelancing"
              content="Leverage the decentralized web for enhanced freelancing experiences."
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
