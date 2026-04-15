function FooterSection({ footerColumns, contacts, socialLinks }) {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            Мебель<span>Дор</span>
          </a>
          <p className="footer-desc">
            Производство мебели из массива дерева на заказ с 2003 года.
            Собственное оборудование, профессиональные дизайнеры, честные цены.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <div className="footer-col-title">{column.title}</div>
            <ul className="footer-links">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

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
        <div className="footer-social">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="social-btn" aria-label={link.label}>
              {link.short}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
