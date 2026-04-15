function MobileMenu({ isOpen, links, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`} id="mobileMenu">
      <button
        className="mobile-close"
        id="mobileClose"
        aria-label="Закрыть"
        onClick={onClose}
      >
        ✕
      </button>
      {links.map((link) => (
        <a key={link.href} href={link.href} onClick={onClose}>
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default MobileMenu;
