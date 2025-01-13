import React from "react";
import { Paper, Box } from "@mui/material";
import { SvgIcon } from "@mui/material";

export default function PlayVideoPlayer() {
  return (
    <Paper
      sx={{
        borderRadius: "25px",
        overflow: "hidden",
        bgcolor: "secondary.main",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <SvgIcon
          sx={{
            fontSize: "100px",
            color: "info.dark",
          }}
        >
          <circle cx="12" cy="12" r="10" fill="currentColor" />
          <polygon points="10,8 16,12 10,16" fill="#CCC2DC" />{" "}
        </SvgIcon>
      </Box>
    </Paper>
  );
}
