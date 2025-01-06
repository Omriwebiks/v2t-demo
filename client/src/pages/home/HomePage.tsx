import React from "react";
import { Box } from "@mui/material";
import InfroCard from "./InfroCard";
import VideoCard from "./VideoCard";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        marginTop: 4,
      }}
    >
      <VideoCard
        src="https://s3-alpha-sig.figma.com/img/66e3/3dec/1d50ec7c56cfea569c3daeda06734ffa?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqVypQMn0G8V~Dww6RVNcT5oyP8dUtIeC~WF6Kfqr~0gZSlmFh0ESLRM2W6aGmJsimAHPR~JXX1jGN-uK2Orkizjb1VbpEPVV7XFENSlH5sjomJlRU~CeyrUPAY0WlEkCBi-qjjNwpynG3Rl5nVlv1GzSi9tQAIFoeqaljZlzNLn41iDdOgB5ORenRIA6rpdRh4H5BbTD8XoVnHnEQub64lIA-sCtyxXXRvbB2XbPNvXIhT2BncIoIXFFDe1WNH7JfoeNsdZK~UhUb3-g0hqZqu3INz3pGFjZH2bdS88nQQCrEA7B~84Ca1jkaDrbo~QL08WrCer2Bz69MFwg76wmA__"
        alt="placeholder"
      />
      <Box
        sx={{
          display: "flex",
          gap: 3,
          width: "100%",
          maxWidth: "798px",
        }}
      >
        <InfroCard
          title="GT"
          content="A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
        />
        <InfroCard
          title="Model Output"
          content="A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
        />
      </Box>
    </Box>
  );
};

export default HomePage;
