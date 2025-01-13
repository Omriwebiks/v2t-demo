import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export default function SideBarItem({
  icon,
  text = "",
  link,
  isSelected = false,
  onClick,
  customStyles = {},
}: {
  icon: JSX.Element;
  text?: string;
  link?: string;
  isSelected?: boolean;
  onClick?: () => void;
  customStyles?: object;
}) {
  return (
    <ListItem disablePadding>
      <ListItemButton
        component={link ? Link : "div"}
        to={link}
        onClick={onClick}
        sx={{
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          alignItems: "center",
          gap: "5px",
          color: "info.main",
          "&:hover .icon-container": {
            backgroundColor: "info.dark",
          },
        }}
      >
        <ListItemIcon
          className="icon-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "40px",
            borderRadius: "100px",
            color: "info.main",
            backgroundColor: isSelected ? "info.dark" : "inherit",
            transition: "background-color 0.2s ease-in-out",

            ...customStyles,
          }}
        >
          {icon}
        </ListItemIcon>
        {text && (
          <ListItemText
            primary={
              <Typography
                variant="body2"
                sx={{
                  fontWeight: isSelected ? "bold" : "normal",
                  textAlign: "center",
                }}
              >
                {text}
              </Typography>
            }
          />
        )}
      </ListItemButton>
    </ListItem>
  );
}
