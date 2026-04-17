import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "../landing/MobileMenu";
import CursorLayer from "../landing/CursorLayer";
import FooterSection from "../landing/FooterSection";
import { contacts, socialLinks } from "../../content/landingData";
import { useLandingEffects } from "../../hooks/useLandingEffects";
import home1 from "../assets/photos/home1.jpg";

const HOME_NAV_LINKS = [
  { href: "#advantages", label: "О компании" },
  { href: "#catalog", label: "Каталог" },
  { href: "#process", label: "Как работаем" },
  { href: "#gallery", label: "Работы" },
  { href: "#reviews", label: "Отзывы" },
];

const PAGE_LINKS = [
  { to: "/o-kompanii", label: "О компании" },
  { to: "/uslugi", label: "Услуги" },
  { to: "/kak-zakazat", label: "Как заказать" },
  { to: "/galereya", label: "Галерея" },
  { to: "/kontakty", label: "Контакты" },
];

function PageShell({ children, heroTitle, heroSub, heroImg }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useLandingEffects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="landing-shell">
      <CursorLayer />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        links={PAGE_LINKS}
        onClose={() => setIsMobileMenuOpen(false)}
        onScrollToCta={() => setIsMobileMenuOpen(false)}
      />

      {/* Fixed Navbar — always scrolled state on inner pages */}
      <nav id="navbar" className="scrolled" style={{ position: "fixed" }}>
        <Link to="/" className="nav-logo">Мебель<span>Дор</span></Link>
        <ul className="nav-links">
          {PAGE_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={location.pathname === link.to ? "active" : ""}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="nav-cta"
          onClick={() => {
            window.location.href = "/#/";
          }}
        >
          Рассчитать
        </button>
        <button
          className={`nav-burger${isMobileMenuOpen ? " is-open" : ""}`}
          aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Inner page hero */}
      <div className="page-hero" style={{ paddingTop: "80px" }}>
        <div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${heroImg || home1})` }}
        />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="hero-badge">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</Link>
            <span style={{ opacity: .4, margin: "0 .5rem" }}>·</span>
            {heroTitle}
          </div>
          <h1 className="page-hero-title">{heroTitle}</h1>
          {heroSub && <p className="page-hero-sub">{heroSub}</p>}
        </div>
      </div>

      <main className="page-main">{children}</main>

      <FooterSection contacts={contacts} socialLinks={socialLinks} />
    </div>
  );
}

export default PageShell;
