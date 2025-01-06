import React, { useState } from "react";
import { Box, Chip, Container, Typography } from "@mui/material";
import VideoImg from "../library/VideoImg";

const categories = ["Jail", "Stones", "Border", "Aerial", "Road"];
const videos = new Array(20).fill(0).map((_, index) => ({
  title: `Video ${index + 1}`,
  project: "Stones",
}));

export default function FavoritesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Stones");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <Container sx={{ paddingTop: 1 }}>
      <Typography>Favorites</Typography>
      <Box
        sx={{
          width: "100%",
          gap: 0.5,
          display: "flex",
          flexWrap: "wrap",
          marginTop: 2,
        }}
      >
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            color={category === selectedCategory ? "primary" : "default"}
            onClick={() => handleCategoryChange(category)}
            clickable
            variant={category === selectedCategory ? "filled" : "outlined"}
            sx={{
              width: "7%",
              borderRadius: "8px",
              fontSize: "1rem",
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
                lg: "17%",
              },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <VideoImg title={video.title} project={video.project} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}