import { Paper, Typography } from "@mui/material";
import React from "react";

export default function InfroCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          flex: title === "GT" ? "1" : "2",
          p: 3,
          borderRadius: "25px",
          bgcolor: "white",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 700,
            fontSize: "1.1rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
          }}
        >
          {content}
        </Typography>
      </Paper>
    </>
  );
}
