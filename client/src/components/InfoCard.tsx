import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

interface InfoCardProps {
  title: string;
  content?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: "28px",
        bgcolor: "secondary.main",
        overflow: "clip",
        color: "info.main",
        boxSizing: "border-box",
        width: "647.5px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          lineHeight: "32px",
          fontSize: { md: "1.5rem" },
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          lineHeight: "20px",
          letterSpacing: "0.25px",
          fontSize: { md: "1rem" },
        }}
      >
        {content ? content : "Select a video to play"}
      </Typography>
      {!content && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <DoNotDisturbIcon sx={{ fontSize: "100px", color: "info.dark" }} />
        </Box>
      )}
    </Paper>
  );
};

export default InfoCard;
