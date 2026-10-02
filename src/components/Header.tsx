import { Link, NavLink } from "react-router";

export default function Header() {
  const navItems = [
    { label: "Home", to: "/", end: true },
    { label: "About", to: "/about" },
    { label: "Resume", to: "/resume" },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Olivier Mugisha Kwizera, home">
          <span>OMK</span><span className="brand-period">.</span>
        </Link>
        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
