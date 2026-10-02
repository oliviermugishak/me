import { Route, Routes } from "react-router";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./page/about";
import HomePage from "./page/home";
import NotFoundPage from "./page/not-found";
import ResumePage from "./page/resume";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
