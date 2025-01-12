import React, { useState } from "react";
import { Box, List } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import StarsIcon from "@mui/icons-material/Stars";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import useMediaQuery from "@mui/material/useMediaQuery";
import SideBarItem from "../../components/SideBarItem";
import logo from "../../assets/webiksLogo.svg";

export default function SideBar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (link: string) => {
    setSelectedItem(link);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: isMobile ? 0 : "initial",
        bottom: isMobile ? "initial" : 0,
        left: isMobile ? "initial" : 0,
        width: isMobile ? "100%" : "80px",
        height: isMobile ? "auto" : "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "column",
        justifyContent: "space-between",
        backgroundColor: "#1D1B20",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          alignItems: "center",
          justifyContent: isMobile ? "space-around" : "flex-start",
          gap: isMobile ? 2 : 1.5,
          padding: 0,
          margin: isMobile ? "10px 0" : "initial",
          width: "100%",
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            alignItems: "center",
            justifyContent: isMobile ? "space-around" : "flex-start",
            gap: isMobile ? 2 : 1.5,
            padding: 0,
            margin: 0,
            width: "100%",
          }}
        >
          <SideBarItem
            icon={<MenuIcon />}
            link="/menu"
            isSelected={selectedItem === "/menu"}
            onClick={() => handleItemClick("/menu")}
          />
          <SideBarItem
            icon={<AddIcon />}
            customStyles={{
              backgroundColor: "#633B48",
              color: "white",
              height: "50px",
              width: "50px",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: isMobile ? 0 : "20px",
            }}
            link="/add"
            isSelected={selectedItem === "/add"}
            onClick={() => handleItemClick("/add")}
          />
          <SideBarItem
            icon={<PlayArrowIcon />}
            link="/"
            isSelected={selectedItem === "/"}
            onClick={() => handleItemClick("/")}
          />
        </List>

        {!isMobile && (
          <>
            <SideBarItem
              icon={<FolderOpenIcon />}
              text="Library"
              link="/library"
              isSelected={selectedItem === "/library"}
              onClick={() => handleItemClick("/library")}
            />
            <SideBarItem
              icon={<StarsIcon />}
              text="Projects"
              link="/project"
              isSelected={selectedItem === "/project"}
              onClick={() => handleItemClick("/project")}
            />
            <SideBarItem
              icon={<BookmarkBorderIcon />}
              text="Favorites"
              link="/favorites"
              isSelected={selectedItem === "/favorites"}
              onClick={() => handleItemClick("/favorites")}
            />
          </>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: isMobile ? "fixed" : "relative",
          bottom: isMobile ? 0 : "initial",
          left: 0,
          width: "100%",
          backgroundColor: isMobile ? "#1D1B20" : "transparent",
          padding: isMobile ? "10px 0" : "20px 0",
        }}
      >
        <img
          src={logo}
          alt="Webiks"
          style={{
            width: isMobile ? "60px" : "80.26px",
            height: isMobile ? "23px" : "31.08px",
          }}
        />
      </Box>
    </Box>
  );
}
