import React from "react";
import { Box, List } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StarsIcon from "@mui/icons-material/Stars";
import MenuIcon from "@mui/icons-material/Menu";
import SideBarItem from "./SideBarItem";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SideBar() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        alignItems: "center",
        justifyContent: isMobile ? "space-around" : "flex-start",
        width: isMobile ? "100%" : "auto",
        backgroundColor: isMobile ? "#f8f8f8" : "transparent",
        padding: isMobile ? "10px 0" : "0",
        position: isMobile ? "fixed" : "relative",
        top: 0,
        left: isMobile ? "0" : "0",
        height: isMobile ? "auto" : "100vh",
        zIndex: 1000,
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          width: isMobile ? "100%" : "auto",
          padding: 0,
          margin: 0,
          gap: isMobile ? 2 : 0,
        }}
      >
        <SideBarItem icon={<MenuIcon />} />
        <SideBarItem
          icon={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: isMobile ? "auto" : "60px",
                height: isMobile ? "auto" : "50px",
                backgroundColor: "#FFD8E4",
                borderRadius: "12px",
                padding: isMobile ? "10px" : "0",
                "@media (max-width: 768px)": {
                  width: "auto",
                  height: "auto",
                },
                "@media (max-width: 480px)": {
                  width: "auto",
                  height: "auto",
                },
              }}
            >
              <AddIcon />
            </Box>
          }
        />
        <SideBarItem
          icon={<HomeIcon />}
          text={isMobile ? "" : "Player"}
          link="/"
        />
        <SideBarItem
          icon={<MenuBookIcon />}
          text={isMobile ? "" : "Library"}
          link="/library"
        />
        <SideBarItem icon={<StarsIcon />} text={isMobile ? "" : "Favorites"} />
        <SideBarItem icon={<StarsIcon />} text={isMobile ? "" : "Projects"} />
      </List>
    </Box>
  );
}
