import { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import VideoImg from "./VideoImg";
import CheckIcon from "@mui/icons-material/Check";

const categories = ["Jail", "Stones", "Border", "Aerial", "Road"];
const videos = new Array(20).fill(0).map((_, index) => ({
  title: index < 20 ? `Video ${index + 1}` : "Title",
  project: "Stones",
}));

export default function LibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Stones");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Box>
      <Typography>Library</Typography>

      <Box
        sx={{
          width: "100%",
          gap: 0.5,
          display: "flex",
          flexWrap: "wrap",
          marginBottom: 2,
        }}
      >
        {categories.map((category) => (
          <Chip
            key={category}
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                {category === selectedCategory && (
                  <CheckIcon fontSize="small" />
                )}
                {category}
              </Box>
            }
            color={category === selectedCategory ? "primary" : "default"}
            onClick={() => handleCategoryChange(category)}
            clickable
            variant={category === selectedCategory ? "filled" : "outlined"}
            sx={{
              width: "10%",
              fontSize: "1rem",
              backgroundColor:
                category === selectedCategory ? "#E8DEF8" : "white",
              color: category === selectedCategory ? "black" : "gray",
              borderRadius: "8px",
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {videos.map((video, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "48%",
                md: "30%",
                lg: "19%",
              },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <VideoImg title={video.title} project={video.project} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
