import { Link } from "react-router-dom";

const FOOTER_NAV = [
  { to: "/o-kompanii", label: "О компании" },
  { to: "/uslugi", label: "Услуги" },
  { to: "/kak-zakazat", label: "Как заказать" },
  { to: "/galereya", label: "Галерея работ" },
  { to: "/kontakty", label: "Контакты" },
];

const FURNITURE_LINKS = [
  "Кухни из массива",
  "Шкафы и комоды",
  "Кабинеты",
  "Кровати",
  "Лестницы",
  "Двери из массива",
];

const SOCIAL_HREFS = {
  vk: "https://vk.com/share.php?url=https%3A%2F%2Fmebel-dor.ru",
  tg: "https://t.me/share/url?url=https%3A%2F%2Fmebel-dor.ru&text=%D0%9C%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%D0%94%D0%BE%D1%80",
  wa: "https://wa.me/79167540337?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D1%81%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D0%B8.",
};

function resolveSocialHref(short, fallback) {
  return SOCIAL_HREFS[short?.toLowerCase()] ?? fallback;
}

function FooterSection({ contacts, socialLinks }) {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link
            to="/"
            className="nav-logo"
            style={{ display: "inline-block", marginBottom: "1rem" }}
          >
            Мебель<span>Дор</span>
          </Link>
          <p className="footer-desc">
            Производство мебели из массива дерева на заказ с 2003 года.
            Собственное оборудование, профессиональные дизайнеры, честные цены.
          </p>
          <div className="footer-social" style={{ marginTop: "1.5rem" }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={resolveSocialHref(link.short, link.href)}
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

        <div>
          <div className="footer-col-title">Навигация</div>
          <ul className="footer-links">
            {FOOTER_NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Мебель</div>
          <ul className="footer-links">
            {FURNITURE_LINKS.map((label) => (
              <li key={label}>
                <Link to="/uslugi">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <div className="footer-col-title">Контакты</div>
          {contacts.map((contact) => (
            <div key={contact.label} className="contact-item">
              <span className="contact-label">{contact.label}</span>
              {contact.href ? (
                <a href={contact.href} className="contact-value">
                  {contact.value}
                </a>
              ) : (
                <span className="contact-value">{contact.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          ООО «МебельДор» © 2003–2025. Все права защищены.
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link
            to="/kontakty"
            className="footer-copy"
            style={{ textDecoration: "none", transition: "color .2s" }}
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
