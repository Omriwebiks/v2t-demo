import { useState } from "react";
import ModeToggle from "../../components/ModeToogle";
import { Box } from "@mui/material";
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
];

export default function ProjectPage() {
  const [view, setView] = useState("list");
  const toggleItems = ["list", "grid"];

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <ModeToggle items={toggleItems} view={view} setView={setView} />
        </Box>

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
    </>
  );
}
