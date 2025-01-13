import React from "react";
import { Box } from "@mui/material";
import InfroCard from "../../components/InfoCard";
import VideoPlayer from "../../components/VideoPlayer";
import exPhoto from "../../assets/exPhoto.svg";

const data = {
  video: {
    src: exPhoto,
    alt: "video content",
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
        boxSizing: "border-box", // חשוב להוסיף כדי שהפדינג לא יגרום לגלילה
      }}
    >
      {/* Video Player */}
      <Box
        sx={{
          width: "100%",
          flex: "2", // יקבל 2 חלקים מהמקום הפנוי
          borderRadius: 2,
          overflow: "hidden",
          backgroundColor: "#1F2937",
        }}
      >
        <VideoPlayer src={data.video.src} alt={data.video.alt} />
      </Box>

      {/* Info Cards */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          flex: "1", // יקבל חלק 1 מהמקום הפנוי
        }}
      >
        {data.cards.map((card) => (
          <InfroCard title={card.title} content={card.content} />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
