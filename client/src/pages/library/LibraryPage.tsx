import { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import VideoCard from "../../components/VideoCard";
import CheckIcon from "@mui/icons-material/Check";

const categories = ["All", "Jail", "Stones", "Border", "Aerial", "Road"];
const videos = Array.from({ length: 20 }, (_, index) => ({
  title: `Video ${index + 1}`,
  project: "Stones",
}));

export default function LibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Stones");

  return (
    <Box>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexWrap: "wrap",
          gap: 0.5,
          marginBottom: 2,
        }}
      >
        {categories.map((category) => (
          <Chip
            key={category}
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                {category === selectedCategory && (
                  <CheckIcon fontSize="small" />
                )}
                {category}
              </Box>
            }
            color={category === selectedCategory ? "primary" : "default"}
            onClick={() => setSelectedCategory(category)}
            clickable
            variant={category === selectedCategory ? "filled" : "outlined"}
            sx={{
              minWidth: { xs: "auto", sm: "10%" },
              width: { xs: "calc(50% - 4px)", sm: "10%" },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              color: "info.main",
              backgroundColor:
                category === selectedCategory ? "info.dark" : "primary.main",
              borderRadius: "8px",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>

      {/* Video Library Title */}
      <Typography variant="h5" sx={{ mb: 3, color: "#E6E0E9" }}>
        Video Library
      </Typography>

      {/* Video Cards Grid */}
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(8, 1fr)",
          },
        }}
      >
        {videos.map((video, index) => (
          <Box
            key={index}
            sx={{
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <VideoCard title={video.title} project={video.project} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
