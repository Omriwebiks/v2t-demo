import React from "react";
import { Box, Typography, Divider, SxProps, Theme } from "@mui/material";
import Rating from "./Rating";
import LikeButton from "./LikeButton";

interface ListItemProps {
  item: {
    id: number;
    title: string;
    created: string;
    updated: string;
    time: string;
    description: string;
    rating?: number;
    liked?: boolean;
  };
  showDivider: boolean;
  projectTitle?: string;
  onToggleLike?: (id: number) => void;
  sx?: SxProps<Theme>;
}

const ListItem: React.FC<ListItemProps> = ({
  item,
  showDivider,
  projectTitle,
  onToggleLike,
  sx,
}) => {
  return (
    <Box key={item.id} sx={{ ...sx }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
          marginTop: 2,
          alignItems: { xs: "center", sm: "flex-start" },
          width: "100%",
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
        <Box sx={{ color: "info.main" }}>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            {item.title}
          </Typography>
          <Typography>
            {projectTitle && `${projectTitle} •`} Created {item.created} • Last
            Updated {item.updated} | {item.time}
          </Typography>
          <Typography>{item.description}</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          {item.rating !== undefined && <Rating rating={item.rating} />}
          {item.liked !== undefined && onToggleLike && (
            <LikeButton
              liked={item.liked}
              onToggleLike={() => onToggleLike(item.id)}
            />
          )}
        </Box>
      </Box>
      {showDivider && <Divider sx={{ marginTop: 2 }} />}
    </Box>
  );
};

export default ListItem;
