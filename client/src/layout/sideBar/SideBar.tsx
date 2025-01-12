import React, { useState } from "react"; // הוספת useState
import { Box, List } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StarsIcon from "@mui/icons-material/Stars";
import MenuIcon from "@mui/icons-material/Menu";
import SideBarItem from "../../components/SideBarItem";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SideBar() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (link: string) => {
    setSelectedItem(link);
  };

  return (
    <Box>
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
        <SideBarItem
          icon={<MenuIcon />}
          isSelected={selectedItem === "/menu"}
          onClick={() => handleItemClick("/menu")}
        />
        <SideBarItem
          icon={<AddIcon />}
          customStyles={{
            backgroundColor: "#FFD8E4",
            height: "50px",
            borderRadius: "4px",
          }}
          isSelected={selectedItem === "/add"}
          onClick={() => handleItemClick("/add")}
        />
        <SideBarItem
          icon={<HomeIcon />}
          text={isMobile ? "" : "Player"}
          link="/"
          isSelected={selectedItem === "/"}
          onClick={() => handleItemClick("/")}
        />
        <SideBarItem
          icon={<MenuBookIcon />}
          text={isMobile ? "" : "Library"}
          link="/library"
          isSelected={selectedItem === "/library"}
          onClick={() => handleItemClick("/library")}
        />
        <SideBarItem
          icon={<StarsIcon />}
          text={isMobile ? "" : "Favorites"}
          link="/favorites"
          isSelected={selectedItem === "/favorites"}
          onClick={() => handleItemClick("/favorites")}
        />
        <SideBarItem
          icon={<StarsIcon />}
          text={isMobile ? "" : "Projects"}
          link="/project"
          isSelected={selectedItem === "/project"}
          onClick={() => handleItemClick("/project")}
        />
      </List>
      <SideBarItem
        icon={<StarsIcon />}
        text={isMobile ? "" : "check"}
        link="/check"
        isSelected={selectedItem === "/check"}
        onClick={() => handleItemClick("/check")}
      />
    </Box>
  );
}
