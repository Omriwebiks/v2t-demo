import React from "react";
import SideBar from "./layout/sideBar/SideBar";
import AppRouter from "./router/appRouter";

function App() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <SideBar />
      <div
        style={{
          marginLeft: "7%",
        }}
      >
        {<AppRouter />}
      </div>
    </div>
  );
}

export default App;
