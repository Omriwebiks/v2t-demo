import React from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface LikeButtonProps {
  liked: boolean;
  onToggleLike: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ liked, onToggleLike }) => {
  return (
    <IconButton aria-label="like" sx={{ marginLeft: 1 }} onClick={onToggleLike}>
      {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default LikeButton;