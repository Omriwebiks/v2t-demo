import React, { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import VideoImg from "../library/VideoImg";
import CheckIcon from "@mui/icons-material/Check";

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
    <Box>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Favorites
      </Typography>
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
              minWidth: { xs: "auto", sm: "10%" },
              width: { xs: "calc(50% - 4px)", sm: "10%" },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              backgroundColor:
                category === selectedCategory ? "#E8DEF8" : "white",
              color: category === selectedCategory ? "black" : "gray",
              borderRadius: "8px",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                backgroundColor:
                  category === selectedCategory
                    ? "#E8DEF8"
                    : "rgba(0, 0, 0, 0.04)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                color:
                  category === selectedCategory
                    ? "black"
                    : "rgba(0, 0, 0, 0.87)",
              },
              "&.MuiChip-clickable:hover": {
                backgroundColor:
                  category === selectedCategory
                    ? "#E8DEF8"
                    : "rgba(0, 0, 0, 0.04)",
              },
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          },
        }}
      >
        {videos.map((video, index) => (
          <Box
            key={index}
            sx={{
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                "& > *": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  outline: "2px solid #E8DEF8",
                },
              },
            }}
          >
            <VideoImg title={video.title} project={video.project} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
