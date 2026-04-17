import PageShell from "./PageShell";
import home1 from "../assets/photos/home1.jpg";
import m32 from "../assets/photos/phoca_thumb_l_m32-1.jpg";
import m10 from "../assets/photos/phoca_thumb_l_m10-1.jpg";

const team = [
  { name: "Алексей Дорохов", role: "Основатель и руководитель", years: "20 лет в мебельном деле" },
  { name: "Светлана Иванова", role: "Главный дизайнер", years: "12 лет опыта" },
  { name: "Михаил Петров", role: "Начальник производства", years: "15 лет опыта" },
  { name: "Ольга Смирнова", role: "Менеджер по работе с клиентами", years: "8 лет опыта" },
];

const values = [
  { icon: "✦", title: "Качество без компромиссов", text: "Используем только сертифицированные материалы. Каждое изделие проходит многоступенчатый контроль качества до передачи заказчику." },
  { icon: "⬡", title: "Честные отношения", text: "Цена называется один раз и не меняется. Договор заключается до начала работ — никаких сюрпризов при расчёте." },
  { icon: "◈", title: "Индивидуальный подход", text: "Не работаем по шаблонам. Каждый проект создаётся с нуля под конкретный интерьер и образ жизни клиента." },
  { icon: "◇", title: "Ответственность за результат", text: "Гарантия 2 года на все изделия. Выезд специалиста для устранения любых замечаний — в течение 48 часов." },
];

function AboutPage() {
  return (
    <PageShell
      heroTitle="О компании"
      heroSub="20 лет создаём мебель, которой гордятся"
      heroImg={home1}
    >
      {/* Story section */}
      <section className="inner-section">
        <div className="inner-grid-2">
          <div>
            <div className="section-tag reveal">Наша история</div>
            <h2 className="section-title reveal">
              С <em>2003</em> года<br/>в Подмосковье
            </h2>
            <p className="inner-text reveal" style={{ marginTop: "1.5rem" }}>
              МебельДор основана в Ногинске в 2003 году. За двадцать лет мы прошли путь от небольшой мастерской до полноценного производства с собственным технологическим оборудованием и командой из опытных специалистов.
            </p>
            <p className="inner-text reveal" style={{ marginTop: "1rem" }}>
              Производственная база компании — это новейшее оборудование по деревообработке, которое позволяет изготавливать изделия любого уровня сложности. Мы применяем современные технологии обработки массива дерева, обеспечивая мебели наивысшую прочность и защиту.
            </p>
            <p className="inner-text reveal" style={{ marginTop: "1rem" }}>
              Сегодня МебельДор — это более 1 200 завершённых проектов, 98% довольных клиентов и репутация, которую мы строили годами честной работы.
            </p>
          </div>
          <div className="about-img-wrap reveal reveal-delay-2">
            <img
              src={m32}
              alt="Производство МебельДор"
              className="about-img"
            />
            <div className="about-img-badge">
              <span className="about-badge-num">1200+</span>
              <span className="about-badge-text">проектов выполнено</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="inner-section" style={{ background: "var(--dark)" }}>
        <div className="section-tag reveal">Наши принципы</div>
        <h2 className="section-title reveal">То, на чём мы <em>не экономим</em></h2>
        <div className="advantages-grid" style={{ marginTop: "4rem" }}>
          {values.map((v, i) => (
            <div key={v.title} className={`adv-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
              <div className="adv-icon">{v.icon}</div>
              <div className="adv-title">{v.title}</div>
              <p className="adv-text">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Production */}
      <section className="inner-section">
        <div className="inner-grid-2">
          <div className="about-img-wrap reveal">
            <img
              src={m10}
              alt="Оборудование"
              className="about-img"
            />
          </div>
          <div>
            <div className="section-tag reveal">Производство</div>
            <h2 className="section-title reveal">Собственное<br/><em>оборудование</em></h2>
            <p className="inner-text reveal" style={{ marginTop: "1.5rem" }}>
              Мы не зависим от подрядчиков. Всё производится в нашем цеху в Ногинске на профессиональном деревообрабатывающем оборудовании европейского класса.
            </p>
            <div className="about-stats reveal reveal-delay-1" style={{ marginTop: "2rem" }}>
              {[
                { num: "20", label: "лет на рынке" },
                { num: "25", label: "дней — срок изготовления" },
                { num: "0 ₽", label: "замер и дизайн-проект" },
              ].map((s) => (
                <div key={s.label} className="about-stat">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="inner-section" style={{ background: "var(--dark)" }}>
        <div className="section-tag reveal">Команда</div>
        <h2 className="section-title reveal">Люди, которые<br/>делают <em>мебель</em></h2>
        <div className="team-grid" style={{ marginTop: "4rem" }}>
          {team.map((member, i) => (
            <div key={member.name} className={`team-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
              <div className="team-avatar">
                {member.name.charAt(0)}
              </div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <div className="team-years">{member.years}</div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export default AboutPage;
