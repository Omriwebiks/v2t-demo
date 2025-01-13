import { Paper, Typography } from "@mui/material";
import React from "react";

interface InfoCardProps {
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
  return (
    <Paper
      elevation={8}
      sx={{
        flex: "1 1 auto",
        maxWidth: { xs: "100%", md: "45%", lg: "50%" },
        height: "auto",
        p: 3,
        borderRadius: "28px",
        bgcolor: "#1D1B20",
        overflow: "clip",
        color: "#E6E0E9",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          lineHeight: "32px",
          fontSize: { xs: "1.25rem", md: "1.5rem" },
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          lineHeight: "20px",
          letterSpacing: "0.25px",
          fontSize: { xs: "0.875rem", md: "1rem" },
        }}
      >
        {content}
      </Typography>
    </Paper>
  );
};

export default InfoCard;
