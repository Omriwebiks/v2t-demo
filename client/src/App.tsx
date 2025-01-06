import React from "react";
// import HomePage from "./pages/home/HomePage";
import SideBar from "./layout/sideBar/SideBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import LibraryPage from "./pages/library/LibraryPage";

function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "100vh",
      }}
    >
      <SideBar />

      <div
        style={{
          flex: 1,
          marginTop: isMobile ? "60px" : "0",
          marginLeft: isMobile ? "0" : "60px",
        }}
      >
        {/* <HomePage /> */}
        <LibraryPage />
      </div>
    </div>
  );
}

export default App;
