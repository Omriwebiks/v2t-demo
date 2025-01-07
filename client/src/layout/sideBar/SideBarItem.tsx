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
}: {
  icon: JSX.Element;
  text?: string;
  link?: string;
}) {
  return (
    <ListItem>
      <ListItemButton
        component={link ? Link : "div"}
        to={link}
        sx={{
          padding: "0",
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "57.5px",
            width: "55px",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
              }}
            >
              {text}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
