import PageShell from "./PageShell";
import home1 from "../assets/photos/home1.jpg";
import m7 from "../assets/photos/phoca_thumb_l_m7-1.jpg";
import m31 from "../assets/photos/phoca_thumb_l_m31-1.jpg";
import m32 from "../assets/photos/phoca_thumb_l_m32-1.jpg";
import m46 from "../assets/photos/phoca_thumb_l_m46-1.jpg";
import m47 from "../assets/photos/phoca_thumb_l_m47-1.jpg";
import m48 from "../assets/photos/phoca_thumb_l_m48-1.jpg";
import f4 from "../assets/photos/phoca_thumb_l_f4-1.jpg";

const services = [
  {
    icon: "◎",
    title: "Консультация",
    text: "Сотрудники компании всегда с радостью предоставят консультацию по всем вопросам, связанным с производством мебели по индивидуальным проектам. Можно позвонить, приехать в офис или посетить шоу-рум — получите информацию в полном объёме.",
    detail: "Бесплатно · Пн–Вс 9:00–20:00",
  },
  {
    icon: "◱",
    title: "Выезд замерщика",
    text: "В удобное для вас время специалист произведёт замеры, необходимые для изготовления мебели. Опытный сотрудник приедет в любой день недели, предложит оптимальный вариант, поможет с выбором материала.",
    detail: "Бесплатно · Любой день недели",
  },
  {
    icon: "✦",
    title: "Дизайн-проект",
    text: "Наши специалисты разработают уникальный проект мебели с учётом всех ваших требований и пожеланий.",
    detail: "Бесплатно",
  },
  {
    icon: "⬡",
    title: "Изготовление",
    text: "Срок выполнения заказа — от 25 дней. Этого времени достаточно, чтобы произвести все работы по изготовлению мебели и декоративных элементов любой сложности на собственном оборудовании.",
    detail: "От 25 дней · Фото-отчёт в процессе",
  },
  {
    icon: "◈",
    title: "Доставка",
    text: "Наша служба доставки привезёт заказанную продукцию в заранее согласованные день и время. Подъём на этаж, аккуратный вынос упаковки — всё включено в стоимость.",
    detail: "Включена в стоимость",
  },
  {
    icon: "◇",
    title: "Установка",
    text: "Установка осуществляется на следующий день после доставки или в любой другой согласованный день, включая выходные. До начала монтажа клиентом подготавливается место — всё остальное делают наши мастера.",
    detail: "Включая выходные · Гарантия 2 года",
  },
];

const catalog = [
  { name: "Кабинеты", img: m7 },
  { name: "Шкафы и комоды", img: m31 },
  { name: "Кухни из массива", img: home1 },
  { name: "Кровати", img: m46 },
  { name: "Обеденные зоны", img: m47 },
  { name: "Лестницы", img: m32 },
  { name: "Гардеробные", img: m48 },
  { name: "Детская мебель", img: f4 },
];

function ServicesPage() {
  return (
    <PageShell
      heroTitle="Услуги"
      heroSub="Полный цикл: от замера до установки — в одних руках"
      heroImg={home1}
    >
      {/* Services grid */}
      <section className="inner-section">
        <div className="section-tag reveal">Что мы делаем</div>
        <h2 className="section-title reveal">
          Особое внимание<br/>к <em>сервису</em>
        </h2>
        <p className="inner-text reveal" style={{ marginTop: "1.2rem", maxWidth: "600px" }}>
          Наша компания готова предложить клиентам полный спектр услуг — от первой консультации до гарантийного обслуживания.
        </p>
        <div className="services-grid" style={{ marginTop: "4rem" }}>
          {services.map((s, i) => (
            <div key={s.title} className={`service-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : ""}`}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-num">0{i + 1}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>
              <div className="service-detail">{s.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section className="inner-section" style={{ background: "var(--dark)" }}>
        <div className="section-tag reveal">Каталог мебели</div>
        <h2 className="section-title reveal">Что мы <em>изготавливаем</em></h2>
        <div className="catalog-mini-grid" style={{ marginTop: "4rem" }}>
          {catalog.map((item, i) => (
            <div key={item.name} className={`catalog-mini-card reveal${i > 0 ? ` reveal-delay-${Math.min(i % 4, 4)}` : ""}`}>
              <div className="catalog-mini-img">
                <img src={item.img} alt={item.name} loading="lazy" />
              </div>
              <div className="catalog-mini-name">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="inner-section cta-strip">
        <div className="cta-strip-inner">
          <div>
            <h2 className="section-title" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
              Готовы обсудить<br/><em>ваш проект?</em>
            </h2>
            <p className="inner-text" style={{ marginTop: "1rem" }}>
              Звоните или оставьте заявку — перезвоним в течение 1 часа.
            </p>
          </div>
          <div className="cta-strip-actions">
            <a href="tel:+79167540337" className="btn-primary">+7 (916) 754-03-37</a>
            <a href="/#cta" className="btn-outline">Оставить заявку →</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default ServicesPage;
