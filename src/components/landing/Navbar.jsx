function Navbar({ links, onOpenMenu, onScrollToCta }) {
  return (
    <nav id="navbar">
      <a href="#" className="nav-logo">
        Мебель<span>Дор</span>
      </a>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <button className="nav-cta" onClick={onScrollToCta}>
        Рассчитать
      </button>
      <button
        className="nav-burger"
        id="burgerBtn"
        aria-label="Меню"
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
