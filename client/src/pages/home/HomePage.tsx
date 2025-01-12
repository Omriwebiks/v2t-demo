import React from "react";
import { Box } from "@mui/material";
import InfroCard from "../../components/InfroCard";
import VideoPlayer from "../../components/VideoPlayer";

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        width: "90%",
        margin: "auto",
      }}
    >
      <VideoPlayer
        src="https://s3-alpha-sig.figma.com/img/66e3/3dec/1d50ec7c56cfea569c3daeda06734ffa?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqVypQMn0G8V~Dww6RVNcT5oyP8dUtIeC~WF6Kfqr~0gZSlmFh0ESLRM2W6aGmJsimAHPR~JXX1jGN-uK2Orkizjb1VbpEPVV7XFENSlH5sjomJlRU~CeyrUPAY0WlEkCBi-qjjNwpynG3Rl5nVlv1GzSi9tQAIFoeqaljZlzNLn41iDdOgB5ORenRIA6rpdRh4H5BbTD8XoVnHnEQub64lIA-sCtyxXXRvbB2XbPNvXIhT2BncIoIXFFDe1WNH7JfoeNsdZK~UhUb3-g0hqZqu3INz3pGFjZH2bdS88nQQCrEA7B~84Ca1jkaDrbo~QL08WrCer2Bz69MFwg76wmA__"
        alt="video content"
      />

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
