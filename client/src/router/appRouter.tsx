import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LibraryPage from "../pages/library/LibraryPage";
import FavoritesPage from "../pages/favorites/favoritesPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};

export default AppRouter;
