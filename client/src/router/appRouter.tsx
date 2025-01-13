import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LibraryPage from "../pages/library/LibraryPage";
import FavoritesPage from "../pages/favorites/FavoritesPage";
import ProjectPage from "../pages/project/ProjectPage";
import VideoListPage from "../pages/project/VideoListPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/check" element={<VideoListPage />} />
    </Routes>
  );
};

export default AppRouter;
