import React from "react";
import { Box } from "@mui/material";
import InfroCard from "../../components/InfroCard";
import VideoPlayer from "../../components/VideoPlayer";
import exPhoto from "../../assets/exPhoto.svg";

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        width: "95%",
      }}
    >
      <VideoPlayer src={exPhoto} alt="video content" />

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
          height: { xs: "auto", md: "28vh" },
        }}
      >
        {[
          {
            title: "GT",
            content:
              "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
          },
          {
            title: "Model Output",
            content:
              "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
          },
        ].map((card, index) => (
          <InfroCard key={index} title={card.title} content={card.content} />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
