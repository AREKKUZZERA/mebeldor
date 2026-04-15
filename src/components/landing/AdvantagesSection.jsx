function AdvantagesSection({ advantages }) {
  return (
    <section id="advantages">
      <div className="section-tag reveal">Почему выбирают нас</div>
      <h2 className="section-title reveal">
        Ваш комфорт —
        <br />
        наш <em>приоритет</em>
      </h2>
      <div className="advantages-grid">
        {advantages.map((item, index) => (
          <div
            key={item.title}
            className={`adv-card reveal${index > 0 ? ` reveal-delay-${index}` : ""}`}
          >
            <div className="adv-icon">{item.icon}</div>
            <div className="adv-title">{item.title}</div>
            <p className="adv-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdvantagesSection;
