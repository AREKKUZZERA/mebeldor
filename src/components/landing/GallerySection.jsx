import { useSmoothNavigation } from "../../hooks/useSmoothNavigation";

function GallerySection({ items }) {
  const { handleNavigation } = useSmoothNavigation();

  return (
    <section id="gallery">
      <div className="gallery-head">
        <div>
          <div className="section-tag reveal">Галерея работ</div>
          <h2 className="section-title reveal">
            Наши <em>проекты</em>
          </h2>
        </div>
        <button
          onClick={() => handleNavigation("/#/kontakty")}
          className="btn-outline reveal"
          style={{ background: "none", border: "none", color: "inherit", font: "inherit" }}
        >
          Хочу так же
        </button>
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
