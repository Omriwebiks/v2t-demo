import { useState } from "react";
import ModeToggle from "./ModeToogle";
import { Box, Typography, Divider } from "@mui/material";

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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ModeToggle items={toggleItems} view={view} setView={setView} />
        </Box>

        <Box>
          {projects.map((project, index) => (
            <Box key={project.id}>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  marginTop: 2,
                }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/66e3/3dec/1d50ec7c56cfea569c3daeda06734ffa?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqVypQMn0G8V~Dww6RVNcT5oyP8dUtIeC~WF6Kfqr~0gZSlmFh0ESLRM2W6aGmJsimAHPR~JXX1jGN-uK2Orkizjb1VbpEPVV7XFENSlH5sjomJlRU~CeyrUPAY0WlEkCBi-qjjNwpynG3Rl5nVlv1GzSi9tQAIFoeqaljZlzNLn41iDdOgB5ORenRIA6rpdRh4H5BbTD8XoVnHnEQub64lIA-sCtyxXXRvbB2XbPNvXIhT2BncIoIXFFDe1WNH7JfoeNsdZK~UhUb3-g0hqZqu3INz3pGFjZH2bdS88nQQCrEA7B~84Ca1jkaDrbo~QL08WrCer2Bz69MFwg76wmA__"
                  alt="placeholder"
                  style={{
                    maxWidth: "90px",

                    borderRadius: "8px",
                  }}
                />
                <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 600,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography>
                    Created {project.created} • Last Updated {project.updated} |{" "}
                    {project.time}
                  </Typography>
                  <Typography>{project.description}</Typography>
                </Box>
              </Box>

              {index < projects.length + 1 && <Divider sx={{ marginTop: 1 }} />}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
