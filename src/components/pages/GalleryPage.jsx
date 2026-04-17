import { useState } from "react";
import PageShell from "./PageShell";
import home1 from "../assets/photos/home1.jpg";
import f4 from "../assets/photos/phoca_thumb_l_f4-1.jpg";
import m7 from "../assets/photos/phoca_thumb_l_m7-1.jpg";
import m10 from "../assets/photos/phoca_thumb_l_m10-1.jpg";
import m31 from "../assets/photos/phoca_thumb_l_m31-1.jpg";
import m32 from "../assets/photos/phoca_thumb_l_m32-1.jpg";
import m46 from "../assets/photos/phoca_thumb_l_m46-1.jpg";
import m47 from "../assets/photos/phoca_thumb_l_m47-1.jpg";
import m48 from "../assets/photos/phoca_thumb_l_m48-1.jpg";
import m49 from "../assets/photos/phoca_thumb_l_m49-1.jpg";
import slide1 from "../assets/photos/slide1.jpg";
import slide3 from "../assets/photos/slide3.jpg";

const categories = ["Все работы", "Кухни", "Шкафы", "Гардеробные", "Кабинеты", "Спальни"];

const allWorks = [
  { cat: "Кухни", title: "Кухня из массива дуба", size: "large", img: home1, desc: "Ногинск, 2024" },
  { cat: "Шкафы", title: "Шкаф-купе с зеркалом", size: "small", img: m31, desc: "Электросталь, 2024" },
  { cat: "Гардеробные", title: "Гардеробная 4×3 м", size: "small", img: m32, desc: "Балашиха, 2024" },
  { cat: "Кухни", title: "Кухня с островом", size: "small", img: slide1, desc: "Ногинск, 2023" },
  { cat: "Кабинеты", title: "Домашний кабинет", size: "small", img: m7, desc: "Реутов, 2023" },
  { cat: "Гардеробные", title: "Гардеробная с подсветкой", size: "large", img: m47, desc: "Химки, 2024" },
  { cat: "Спальни", title: "Спальный гарнитур", size: "small", img: m48, desc: "Балашиха, 2023" },
  { cat: "Кухни", title: "Белая кухня Прованс", size: "small", img: slide3, desc: "Щёлково, 2024" },
  { cat: "Шкафы", title: "Встроенный шкаф-купе", size: "small", img: m49, desc: "Ногинск, 2024" },
  { cat: "Кабинеты", title: "Библиотека из массива", size: "small", img: m10, desc: "Электросталь, 2023" },
  { cat: "Спальни", title: "Детская комната", size: "large", img: m46, desc: "Реутов, 2024" },
  { cat: "Кухни", title: "Кухня Loft с фасадами из MDF", size: "small", img: f4, desc: "Балашиха, 2024" },
];

function GalleryPage() {
  const [active, setActive] = useState("Все работы");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "Все работы" ? allWorks : allWorks.filter((w) => w.cat === active);

  return (
    <PageShell
      heroTitle="Галерея работ"
      heroSub="Реальные проекты наших мастеров"
      heroImg={home1}
    >
      <section className="inner-section">
        <div className="section-tag reveal">Наши работы</div>
        <h2 className="section-title reveal">
          Более 1200<br/><em>выполненных проектов</em>
        </h2>

        {/* Filter tabs */}
        <div className="gallery-filters reveal" style={{ marginTop: "3rem" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery masonry grid */}
        <div className="gallery-page-grid" style={{ marginTop: "3rem" }}>
          {filtered.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className={`gallery-page-item ${item.size === "large" ? "gallery-page-large" : ""}`}
              onClick={() => setLightbox(item)}
            >
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="gallery-page-overlay">
                <div className="gallery-page-info">
                  <div className="cat-tag">{item.cat}</div>
                  <div className="cat-name" style={{ fontSize: "1.2rem" }}>{item.title}</div>
                  <div style={{ fontSize: ".72rem", color: "var(--muted)", marginTop: ".3rem" }}>{item.desc}</div>
                </div>
                <div className="gallery-plus">+</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} />
            <div className="lightbox-info">
              <div className="cat-tag">{lightbox.cat}</div>
              <h3 style={{ fontFamily: "var(--ff-serif)", fontSize: "1.4rem", color: "var(--cream)", marginTop: ".4rem" }}>{lightbox.title}</h3>
              <p style={{ fontSize: ".8rem", color: "var(--muted)", marginTop: ".3rem" }}>{lightbox.desc}</p>
            </div>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Закрыть">✕</button>
          </div>
        </div>
      )}

      {/* CTA strip */}
      <section className="inner-section cta-strip">
        <div className="cta-strip-inner">
          <div>
            <h2 className="section-title" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
              Хотите такой же<br/><em>проект?</em>
            </h2>
            <p className="inner-text" style={{ marginTop: "1rem" }}>Оставьте заявку — сделаем расчёт за 1 день.</p>
          </div>
          <div className="cta-strip-actions">
            <a href="tel:+79167540337" className="btn-primary">+7 (916) 754-03-37</a>
            <a href="/#kontakty" className="btn-outline">Оставить заявку →</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default GalleryPage;
