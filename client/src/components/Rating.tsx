import React from "react";
import { Box, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface RatingProps {
  rating: number;
  maxStars?: number;
  editable?: boolean;
  onChange?: (newRating: number) => void;
}

const Rating: React.FC<RatingProps> = ({
  rating,
  maxStars = 5,
  editable = false,
  onChange,
}) => {
  const handleRatingChange = (newRating: number) => {
    if (editable && onChange) {
      onChange(newRating);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: maxStars }, (_, index) =>
        editable ? (
          <IconButton
            key={index}
            onClick={() => handleRatingChange(index + 1)}
            sx={{ padding: 0 }}
          >
            {index < rating ? (
              <StarIcon sx={{ color: "info.main" }} />
            ) : (
              <StarBorderIcon sx={{ color: "info.main" }} />
            )}
          </IconButton>
        ) : (
          <Box key={index}>
            {index < rating ? (
              <StarIcon sx={{ color: "info.main" }} />
            ) : (
              <StarBorderIcon sx={{ color: "info.main" }} />
            )}
          </Box>
        )
      )}
    </Box>
  );
};

export default Rating;
