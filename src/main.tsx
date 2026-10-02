import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

type SitePage = "home" | "about" | "resume";

function isSitePage(page: string | undefined): page is SitePage {
  return page === "home" || page === "about" || page === "resume";
}

const page = isSitePage(document.documentElement.dataset.page)
  ? document.documentElement.dataset.page
  : "home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App page={page} />
  </StrictMode>,
);
