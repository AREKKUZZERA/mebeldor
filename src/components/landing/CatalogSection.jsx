import { useSmoothNavigation } from "../../hooks/useSmoothNavigation";

function CatalogSection({ items }) {
  const { handleNavigation } = useSmoothNavigation();

  return (
    <section id="catalog">
      <div className="catalog-header">
        <div>
          <div className="section-tag reveal">Что мы делаем</div>
          <h2 className="section-title reveal">
            Каталог <em>изделий</em>
          </h2>
        </div>
        <button
          onClick={() => handleNavigation("/#/kontakty")}
          className="btn-outline reveal"
          style={{ alignSelf: "flex-end", background: "none", border: "none", cursor: "pointer", color: "inherit", font: "inherit" }}
        >
          Заказать проект
        </button>
      </div>
      <div className="catalog-grid">
        {items.map((item, index) => (
          <article
            key={item.name}
            className={`cat-card reveal${index > 0 ? ` reveal-delay-${index}` : ""}`}
          >
            <img src={item.image} alt={item.alt} loading="lazy" />
            <div className="cat-overlay" />
            <div className="cat-arrow">→</div>
            <div className="cat-content">
              <div className="cat-tag">{item.tag}</div>
              <div className="cat-name">{item.name}</div>
              <div className="cat-desc">{item.description}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CatalogSection;
