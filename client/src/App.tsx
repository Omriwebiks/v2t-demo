import { Box } from "@mui/material";
import "./App.css";
import SideBar from "./layout/sideBar/SideBar";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />

      <Box sx={{ flexGrow: 1 }}>
        <HomePage />
      </Box>
    </Box>
  );
}

export default App;
