import React from "react";
import { Box, Typography } from "@mui/material";
import HomeSVG from "../images/home.svg";
import FeaturesCard from "../reusables/FeaturesCard";
import FlowCard from "../reusables/FlowCard";
import ApplyCard from "../reusables/ApplyCard";
import Button from "../reusables/Button";

const Home = () => {
  const FlowData = [
    {
      icon: require("../images/submission.svg").default,
      title: "Project Submission",
      content:
        "Submit your requirements and reach out to top-tier talent globally",
      color: "#3C5DED",
    },
    {
      icon: require("../images/bidding.svg").default,
      title: "Bidding Process",
      content: "Review proposals, check out past work, and select the offer",
      color: "#E0683B",
    },
    {
      icon: require("../images/selectExpert.svg").default,
      title: "Select Your Expert",
      content:
        "Discuss project specifics, align on expectations, and establish milestones",
      color: "#905BEC",
    },
    {
      icon: require("../images/jobCompletion.svg").default,
      title: "Job Completion",
      content:
        "Review the work delivered,  and finalize any necessary adjustments",
      color: "#51B73E",
    },
  ];
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
          <Button label="Apply Now" inverse />
          <Button label="Hire Now" />
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
              label="Apply as Freelancer"
              style={{ marginRight: "20px" }}
            />
            <Button label="Hire Freelancer" inverse />
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
      <Box
        sx={{
          backgroundColor: "#F5FCFF",
          py: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "75%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {FlowData.map((i, index) => (
            <FlowCard
              icon={i.icon}
              title={i.title}
              content={i.content}
              color={i.color}
              index={index}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          py: 15,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "75%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ApplyCard
            icon={require("../images/working.svg").default}
            title="Apply as Freelancer"
            content="Join our platform to showcase your skills. Connect with clients, work on exciting projects, and monetize your expertise"
            btnName="Join as Expert"
          />
          <ApplyCard
            icon={require("../images/employee.svg").default}
            title="Hire Freelancer"
            content="Find skilled professionals for your projects. Streamline tasks with expert assistance and achieve your goals efficiently"
            btnName="Find an Expert"
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FBFBFB",
          pt: 10,
          pb: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "75%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Box sx={{ flex: 0.3 }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "Bold", mb: 2 }}
              >
                Logo
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  color: "#8C91A3",
                  mt: 1,
                }}
              >
                Connect with a vast community of 30,000 freelancers, thriving in
                their passion and securing rewarding opportunities.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <img
                  src={require("../images/linkedin.svg").default}
                  alt="projectSubmission"
                  style={{ width: "38px", height: "38px", marginRight: "15px" }}
                />
                <img
                  src={require("../images/discord.svg").default}
                  alt="projectSubmission"
                  style={{ width: "38px", height: "38px", marginRight: "15px" }}
                />
                <img
                  src={require("../images/facebook.svg").default}
                  alt="projectSubmission"
                  style={{ width: "38px", height: "38px", marginRight: "15px" }}
                />
                <img
                  src={require("../images/instagram.svg").default}
                  alt="projectSubmission"
                  style={{ width: "38px", height: "38px", marginRight: "15px" }}
                />
                <img
                  src={require("../images/youtube.svg").default}
                  alt="projectSubmission"
                  style={{ width: "38px", height: "38px", marginRight: "15px" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                flex: 0.18,
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "Bold", mb: 2 }}
              >
                Product
              </Typography>
              {["About", "Contact Us", "Features", "Reviews", "Blog"].map(
                (i1) => (
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      color: "#8C91A3",
                      mt: 1,
                    }}
                  >
                    {i1}
                  </Typography>
                )
              )}
            </Box>
            <Box sx={{ flex: 0.18 }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "Bold", mb: 2 }}
              >
                Support
              </Typography>
              {[
                "Getting Started",
                "Chat Support",
                "Report a Bug",
                "Help Center",
              ].map((i1) => (
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    color: "#8C91A3",
                    mt: 1,
                  }}
                >
                  {i1}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                flex: 0.23,
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "Bold", mb: 2 }}
              >
                Contact Us
              </Typography>
              <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                <img
                  src={require("../images/mail.svg").default}
                  alt="projectSubmission"
                  style={{ width: "18px", height: "18px", marginRight: "8px" }}
                />
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    color: "#8C91A3",
                  }}
                >
                  freelance@gmail.com
                </Typography>
              </Box>
              <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                <img
                  src={require("../images/phone.svg").default}
                  alt="projectSubmission"
                  style={{ width: "18px", height: "18px", marginRight: "8px" }}
                />
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    color: "#8C91A3",
                  }}
                >
                  {`(241) 673 2861`}
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* copyright section */}

          <Box>
            <Box
              sx={{
                backgroundColor: "#E9EBF3",
                width: "100%",
                height: "1px",
                mt: 4,
                mb: 2,
              }}
            ></Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: "#8C91A3",
                }}
              >
                Copyright©2023 Name
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: "#8C91A3",
                  cursor: "pointer",
                }}
              >
                All Rights Reserved | Terms and Conditions | Privacy Policy
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
