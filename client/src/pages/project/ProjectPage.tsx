import { useState } from "react";
import ModeToggle from "../../components/ModeToogle";
import { Box, Typography } from "@mui/material";
import ListItem from "../../components/ListItem";

const projects = [
  {
    id: 1,
    title: "Project 1",
    created: "24/02/2025",
    updated: "24/02/2025",
    time: "0:50",
    description:
      "Supporting line text lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 2,
    title: "Project 2",
    created: "24/02/2025",
    updated: "24/02/2025 ",
    time: "0:51",
    description:
      "Supporting line text lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 3,
    title: "Project 3",
    created: "24/02/2025",
    updated: "24/02/2025 ",
    time: "0:52",
    description:
      "Supporting line text lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 4,
    title: "Project 4",
    created: "24/02/2025",
    updated: "24/02/2025",
    time: "07:70",
    description:
      "Supporting line text lorem ipsum dolor sit amet, consectetur.",
  },
];

export default function ProjectPage() {
  const [view, setView] = useState("list");
  const toggleItems = ["list", "grid"];

  return (
    <Box>
      <Box
        sx={{
          marginTop: 2,
          color: "info.main",
          display: "flex",
          justifyContent: "center", // מרכז את ה-Toggle במרכז האופקי
          marginBottom: 4, // מוסיף מרווח בין ה-Toggle לרשימה
        }}
      >
        <ModeToggle items={toggleItems} view={view} setView={setView} />
      </Box>
      <Typography variant="h5" sx={{ mb: 3, color: "#E6E0E9" }}>
        Projects
      </Typography>
      <Box>
        {projects.map((project, index) => (
          <ListItem
            key={project.id}
            item={project}
            showDivider={index < projects.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
}
