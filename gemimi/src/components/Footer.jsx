import { useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  const isAppPage = pathname === "/app";

  return (
    <footer className="site-footer">
      <span>Gemimi</span>
      <span className="footer-dim">
        {isAppPage ? "built solo, used daily" : "a personal corner of the internet"}
      </span>
    </footer>
  );
}
