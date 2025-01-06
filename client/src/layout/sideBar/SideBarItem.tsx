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
}: {
  icon: JSX.Element;
  text?: string;
}) {
  return (
    <ListItem>
      <ListItemButton
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "23px",
            width: "22px",
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
