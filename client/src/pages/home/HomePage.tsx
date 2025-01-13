import React from "react";
import { Box } from "@mui/material";
import InfroCard from "../../components/InfoCard";
import VideoPlayer from "../../components/VideoPlayer";
import exPhoto from "../../assets/exPhoto.svg";
import PlayVideoPlayer from "../../components/playVideoPlayer";

const data = {
  video: {
    src: exPhoto,
    alt: "example",
  },
  cards: [
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
  ],
};

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          flex: "2",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        {data.video ? (
          <VideoPlayer src={data.video.src} alt={data.video.alt} />
        ) : (
          <PlayVideoPlayer />
        )}
      </Box>

      {/* Info Cards */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flex: "1",
        }}
      >
        {data.cards.map((card) => (
          <InfroCard
            title={card.title}
            content={card.content ? card.content : ""}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
