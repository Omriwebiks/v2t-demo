import { Box, List } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StarsIcon from "@mui/icons-material/Stars";
import MenuIcon from "@mui/icons-material/Menu";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: "20px",
      }}
    >
      <List>
        <SideBarItem icon={<MenuIcon />} />
        <SideBarItem
          icon={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60px",
                height: "50px",
                backgroundColor: "#FFD8E4",
                borderRadius: "12px",
              }}
            >
              <AddIcon />
            </Box>
          }
        />
        <SideBarItem icon={<HomeIcon />} text="Player" />
        <SideBarItem icon={<MenuBookIcon />} text="Library" />
        <SideBarItem icon={<StarsIcon />} text="Favorites" />
        <SideBarItem icon={<StarsIcon />} text="Projects" />
      </List>{" "}
    </Box>
  );
}
