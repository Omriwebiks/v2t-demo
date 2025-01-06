import { useState } from "react";
import { Container, Box, Chip } from "@mui/material";
import VideoImg from "./VideoImg";

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
    <Container sx={{ paddingTop: 1 }}>
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
              padding: "10px 20px",
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
