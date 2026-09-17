import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="wordmark">Gemimi</NavLink>
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "current" : "")}>
          Home
        </NavLink>
        <NavLink to="/app" className={({ isActive }) => (isActive ? "current" : "")}>
          App
        </NavLink>
      </nav>
    </header>
  );
}
