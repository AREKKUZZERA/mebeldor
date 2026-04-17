import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MOBILE_PAGES = [
  { to: "/", label: "Главная" },
  { to: "/o-kompanii", label: "О компании" },
  { to: "/uslugi", label: "Услуги" },
  { to: "/kak-zakazat", label: "Как заказать" },
  { to: "/galereya", label: "Галерея" },
  { to: "/kontakty", label: "Контакты" },
];

const MOBILE_SOCIAL_LINKS = [
  {
    label: "ВКонтакте",
    short: "ВК",
    href: "https://vk.com/share.php?url=https%3A%2F%2Fmebel-dor.ru",
  },
  {
    label: "Telegram",
    short: "TG",
    href: "https://t.me/share/url?url=https%3A%2F%2Fmebel-dor.ru&text=%D0%9C%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%D0%94%D0%BE%D1%80",
  },
  {
    label: "WhatsApp",
    short: "WA",
    href: "https://wa.me/79167540337?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D1%81%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D0%B8.",
  },
];

function MobileMenu({ isOpen, links, onClose, onScrollToCta }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  return (
    <>
      <div
        className={`mobile-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        id="mobileMenu"
        role="dialog"
        aria-modal="true"
        aria-label="Меню навигации"
      >
        <div className="mobile-menu-header">
          <Link to="/" className="nav-logo mobile-logo" onClick={onClose}>
            Мебель<span>Дор</span>
          </Link>
          <button
            className="mobile-close"
            id="mobileClose"
            aria-label="Закрыть меню"
            onClick={onClose}
          >
            <span />
            <span />
          </button>
        </div>

        <nav className="mobile-nav">
          {isHome
            ? links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-link"
                  style={{ "--i": i }}
                  onClick={onClose}
                >
                  <span className="mobile-link-num">0{i + 1}</span>
                  {link.label}
                </a>
              ))
            : links.map((link, i) => (
                <Link
                  key={link.to || link.href}
                  to={link.to}
                  className={`mobile-link ${location.pathname === link.to ? "active" : ""}`}
                  style={{ "--i": i }}
                  onClick={onClose}
                >
                  <span className="mobile-link-num">0{i + 1}</span>
                  {link.label}
                </Link>
              ))}
        </nav>

        <div className="mobile-menu-footer">
          <a href="tel:+79167540337" className="mobile-phone">
            +7 (916) 754-03-37
          </a>
          <button
            className="mobile-cta"
            onClick={() => {
              onScrollToCta?.();
              onClose();
            }}
          >
            Рассчитать стоимость
          </button>
          <div className="mobile-socials">
            {MOBILE_SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-btn"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.short}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
