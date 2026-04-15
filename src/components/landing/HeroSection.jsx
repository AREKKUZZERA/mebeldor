function HeroSection({ onScrollToCta }) {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-badge">Массив дерева · Ногинск · с 2003 года</div>
        <h1 className="hero-title">
          Мебель на заказ
          <br />
          под <em>ваш</em> интерьер
        </h1>
        <p className="hero-sub">
          Индивидуальный дизайн, собственное производство и бесплатный замер.
          Создаём кухни, шкафы и гардеробные, которые живут вместе с вами.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onScrollToCta}>
            Рассчитать стоимость
          </button>
          <a href="#catalog" className="btn-outline">
            Смотреть работы <span>↓</span>
          </a>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-label">Scroll</span>
        <div className="hero-scroll-track">
          <div className="hero-scroll-fill" />
        </div>
        <span className="hero-scroll-value">00%</span>
      </div>
    </section>
  );
}

export default HeroSection;
