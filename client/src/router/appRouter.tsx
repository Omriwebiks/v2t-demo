import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LibraryPage from "../pages/library/LibraryPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/library" element={<LibraryPage />} />
    </Routes>
  );
};

export default AppRouter;
