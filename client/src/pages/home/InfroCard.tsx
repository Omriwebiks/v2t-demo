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
        elevation={8}
        sx={{
          flex: title === "GT" ? "2" : "2.5",
          p: 3,
          borderRadius: "25px",
          bgcolor: "grey.100",
          overflow: "clip",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "2rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            lineHeight: 1.2,
            fontSize: "1.3rem",
          }}
        >
          {content}
        </Typography>
      </Paper>
    </>
  );
}
