import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function SiteLayout() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
