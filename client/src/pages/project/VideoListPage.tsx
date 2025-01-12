import { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ModeToggle from "../../components/ModeToogle";
import ListItem from "../../components/ListItem";

const Data = {
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
      rating: 5,
      liked: false,
    },
    {
      id: 2,
      title: "Video 2",
      created: "24/02/2025",
      updated: "24/02/2025 ",
      time: "0:52",
      description:
        "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      rating: 4,
      liked: true,
    },
    {
      id: 3,
      title: "Video 3",
      created: "24/02/2025",
      updated: "24/02/2025",
      time: "0:53",
      description:
        "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      rating: 3,
      liked: false,
    },
  ],
};

export default function VideoListPage() {
  const [view, setView] = useState("list");
  const [videos, setVideos] = useState(Data.videos);

  const toggleItems = ["list", "grid"];

  const handleToggleLike = (id: number) => {
    setVideos(
      videos.map((video) =>
        video.id === id ? { ...video, liked: !video.liked } : video
      )
    );
  };

  return (
    <Box sx={{ width: "95%", margin: "auto" }}>
      <Box
        sx={{
          backgroundImage: `url(${Data.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          position: "relative",
          borderRadius: "20px",
          display: "flex",
          alignItems: "flex-end",
          p: 2,
          color: "white",
          width: "100%",
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

        <Box sx={{ mt: 4, textAlign: "left", width: "100%" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
            {Data.title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {Data.creator} | Created on {Data.createdDate} | Last updated on{" "}
            {Data.lastUpdated}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
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
              Delete Videos
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

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <ModeToggle items={toggleItems} view={view} setView={setView} />
      </Box>

      <Box sx={{ mt: 3, width: "100%" }}>
        {videos.map((video, index) => (
          <ListItem
            key={video.id}
            item={video}
            projectTitle={Data.title}
            showDivider={index < videos.length - 1}
            onToggleLike={handleToggleLike}
            sx={{
              width: "100%",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
