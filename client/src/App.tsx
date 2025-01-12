import React from "react";
import SideBar from "./layout/sideBar/SideBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppRouter from "./router/appRouter";

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
          marginTop: "2%",
          marginLeft: isMobile ? "5%" : "8%",
          flex: 1,
        }}
      >
        {<AppRouter />}
      </div>
    </div>
  );
}

export default App;
