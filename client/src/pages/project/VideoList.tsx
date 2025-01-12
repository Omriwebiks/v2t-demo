import { useState } from "react";
import { Box, Typography, Divider, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ModeToggle from "./ModeToogle";

const playlistData = {
  title: "Jail",
  creator: "Shabas",
  createdDate: "25.01.2024",
  lastUpdated: "30.02.2025",
  backgroundImage:
    "https://s3-alpha-sig.figma.com/img/66e3/3dec/1d50ec7c56cfea569c3daeda06734ffa?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqVypQMn0G8V~Dww6RVNcT5oyP8dUtIeC~WF6Kfqr~0gZSlmFh0ESLRM2W6aGmJsimAHPR~JXX1jGN-uK2Orkizjb1VbpEPVV7XFENSlH5sjomJlRU~CeyrUPAY0WlEkCBi-qjjNwpynG3Rl5nVlv1GzSi9tQAIFoeqaljZlzNLn41iDdOgB5ORenRIA6rpdRh4H5BbTD8XoVnHnEQub64lIA-sCtyxXXRvbB2XbPNvXIhT2BncIoIXFFDe1WNH7JfoeNsdZK~UhUb3-g0hqZqu3INz3pGFjZH2bdS88nQQCrEA7B~84Ca1jkaDrbo~QL08WrCer2Bz69MFwg76wmA__",
  videos: [
    {
      id: 1,
      title: "Video 1",
      created: "24/02/2025",
      updated: "24/02/2025 ",
      time: "0:51",
      description:
        "Supporting line text lorem ipsum dolor sit amet, consectetur.",
    },
    {
      id: 2,
      title: "Video 2",
      created: "24/02/2025",
      updated: "24/02/2025 ",
      time: "0:52",
      description:
        "Supporting line text lorem ipsum dolor sit amet, consectetur.",
    },
    {
      id: 3,
      title: "Video 3",
      created: "24/02/2025",
      updated: "24/02/2025",
      time: "0:53",
      description:
        "Supporting line text lorem ipsum dolor sit amet, consectetur.",
    },
  ],
};

export default function Playlist() {
  const [view, setView] = useState("list");
  const toggleItems = ["list", "grid"];

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${playlistData.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          width: "95%",
          position: "relative",
          borderRadius: "20px",
          display: "flex",
          alignItems: "flex-end",
          p: 2,
          color: "white",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Box sx={{ mt: 4, textAlign: "left" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
            {playlistData.title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {playlistData.creator} | Created on {playlistData.createdDate} |
            Last updated on {playlistData.lastUpdated}
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              sx={{
                color: "black",
                borderRadius: "8px",
                fontWeight: "600",
                bgcolor: "#F7F1FA",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.3)",
                },
              }}
            >
              Delete videos
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "black",
                borderRadius: "8px",
                fontWeight: "600",

                bgcolor: "#F7F1FA",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.3)",
                },
              }}
            >
              Add Videos
            </Button>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <ModeToggle items={toggleItems} view={view} setView={setView} />
        </Box>

        <Box>
          {playlistData.videos.map((project, index) => (
            <Box key={project.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 3,
                  marginTop: 2,
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/66e3/3dec/1d50ec7c56cfea569c3daeda06734ffa?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqVypQMn0G8V~Dww6RVNcT5oyP8dUtIeC~WF6Kfqr~0gZSlmFh0ESLRM2W6aGmJsimAHPR~JXX1jGN-uK2Orkizjb1VbpEPVV7XFENSlH5sjomJlRU~CeyrUPAY0WlEkCBi-qjjNwpynG3Rl5nVlv1GzSi9tQAIFoeqaljZlzNLn41iDdOgB5ORenRIA6rpdRh4H5BbTD8XoVnHnEQub64lIA-sCtyxXXRvbB2XbPNvXIhT2BncIoIXFFDe1WNH7JfoeNsdZK~UhUb3-g0hqZqu3INz3pGFjZH2bdS88nQQCrEA7B~84Ca1jkaDrbo~QL08WrCer2Bz69MFwg76wmA__"
                  alt="placeholder"
                  style={{
                    maxWidth: "90px",
                    borderRadius: "8px",
                  }}
                />
                <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 600,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography>
                    {playlistData.title} • {project.created} • {project.time}
                  </Typography>
                  <Typography>{project.description}</Typography>
                </Box>
              </Box>

              {index < playlistData.videos.length - 1 && (
                <Divider sx={{ marginTop: 1 }} />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
