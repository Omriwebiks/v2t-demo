import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#141218",
    },
    secondary: {
      main: "#1D1B20",
    },
    info: {
      main: "#CCC2DC",
      dark: "#4A4458",
    },
  },
  typography: {
    fontFamily: "Arial",
  },
});

export default theme;
