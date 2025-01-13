import { Paper, Typography } from "@mui/material";
import React from "react";

interface InfoCardProps {
  title: string;
  content: string;
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
        {content}
      </Typography>
    </Paper>
  );
};

export default InfoCard;
