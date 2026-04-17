import { Link, useLocation } from "react-router-dom";

const NAV_PAGES = [
  { to: "/o-kompanii", label: "О компании" },
  { to: "/uslugi", label: "Услуги" },
  { to: "/kak-zakazat", label: "Как заказать" },
  { to: "/galereya", label: "Галерея" },
  { to: "/kontakty", label: "Контакты" },
];

function Navbar({ links, onOpenMenu, onScrollToCta, isMobileMenuOpen }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const elementId = href.slice(1);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav id="navbar">
      <Link to="/" className="nav-logo">
        Мебель<span>Дор</span>
      </Link>
      <ul className="nav-links">
        {isHome
          ? links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))
          : NAV_PAGES.map((page) => (
              <li key={page.to}>
                <Link
                  to={page.to}
                  className={location.pathname === page.to ? "active" : ""}
                >
                  {page.label}
                </Link>
              </li>
            ))}
      </ul>
      <button className="nav-cta" onClick={onScrollToCta}>
        Рассчитать
      </button>
      <button
        className={`nav-burger${isMobileMenuOpen ? " is-open" : ""}`}
        id="burgerBtn"
        aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isMobileMenuOpen ? "true" : "false"}
        onClick={onOpenMenu}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
