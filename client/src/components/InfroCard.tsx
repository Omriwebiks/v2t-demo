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
        flex: "1 1 0%", // יש להגדיר את ערכי ה-flex באופן מפורש ולא להתמש בכותרת.
        width: "647.5px",
        height: "95%",
        p: 3,
        borderRadius: "28px",
        bgcolor: "#1D1B20",
        overflow: "clip",
        color: "#E6E0E9",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          lineHeight: "32px",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          lineHeight: "20px",
          letterSpacing: "0.25px",
        }}
      >
        {content}
      </Typography>
    </Paper>
  );
};

export default InfoCard;
