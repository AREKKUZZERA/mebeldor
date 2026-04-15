function GallerySection({ items }) {
  return (
    <section id="gallery">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "3rem",
        }}
      >
        <div>
          <div className="section-tag reveal">Галерея работ</div>
          <h2 className="section-title reveal">
            Наши <em>проекты</em>
          </h2>
        </div>
        <a href="#cta" className="btn-outline reveal">
          Хочу так же
        </a>
      </div>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <div
            key={item.image}
            className={`gallery-item reveal${index > 0 ? ` reveal-delay-${index}` : ""}`}
          >
            <img src={item.image} alt={item.alt} loading="lazy" />
            <div className="gallery-overlay">
              <div className="gallery-plus">+</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
