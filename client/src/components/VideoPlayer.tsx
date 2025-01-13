import { Paper } from "@mui/material";

interface VideoPlayerProps {
  src: string;
  alt: string;
}

export default function VideoPlayer({ src, alt }: VideoPlayerProps) {
  return (
    <Paper
      sx={{
        borderRadius: "25px",
        overflow: "hidden",
        bgcolor: "secondary.light",
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
