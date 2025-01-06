import { Paper } from "@mui/material";

export default function VideoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <Paper
      sx={{
        height: "392px",
        width: "798px",
        borderRadius: "25px",
        overflow: "hidden",
        bgcolor: "#e9ecef",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Paper>
  );
}
