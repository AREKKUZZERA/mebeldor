import { useState } from "react";
import PageShell from "./PageShell";
import home1 from "../assets/photos/home1.jpg";

const orderMethods = [
  {
    icon: "☎",
    title: "По телефону",
    text: "Позвоните нам — менеджер уточнит детали заказа, ответит на вопросы и назначит удобное время для выезда замерщика.",
    action: "+7 (916) 754-03-37",
    href: "tel:+79167540337",
    cta: "Позвонить",
  },
  {
    icon: "◱",
    title: "Вызвать замерщика",
    text: "Специалист приедет в удобный день недели. Замер, консультация по материалам и набросок проекта — всё бесплатно.",
    action: "Заявка онлайн",
    href: "#order-form",
    cta: "Оставить заявку",
  },
  {
    icon: "◎",
    title: "Прислать эскиз",
    text: "Если у вас есть идея — нарисуйте от руки или опишите текстом. Наши дизайнеры воплотят её в полноценный 3D-проект.",
    action: "info@mebel-dor.ru",
    href: "mailto:info@mebel-dor.ru",
    cta: "Написать на почту",
  },
  {
    icon: "✉",
    title: "Отправить заказ на почту",
    text: "Отправьте размеры помещения, фото или описание желаемой мебели. Менеджер ответит с предварительным расчётом стоимости.",
    action: "info@mebel-dor.ru",
    href: "mailto:info@mebel-dor.ru",
    cta: "Отправить письмо",
  },
];

const steps = [
  { num: "01", title: "Заявка", text: "Оставляете заявку онлайн или звоните. Менеджер связывается в течение 1 часа для уточнения деталей." },
  { num: "02", title: "Замер", text: "Выезжаем бесплатно в удобное время. Снимаем точные размеры, консультируем по материалам и стилю." },
  { num: "03", title: "Дизайн", text: "Создаём 3D-визуализацию с учётом ваших пожеланий. Вносим правки до полного согласования." },
  { num: "04", title: "Договор", text: "Подписываем договор с фиксированной ценой. Цена не меняется — это прописано в документах." },
  { num: "05", title: "Производство", text: "Изготавливаем на собственном оборудовании. Срок от 25 дней. Фото-отчёт в процессе." },
  { num: "06", title: "Установка", text: "Доставляем и устанавливаем в удобный день, включая выходные. Вывоз упаковки включён." },
];

const furnitureTypes = ["Кухня на заказ", "Шкаф-купе", "Гардеробная", "Детская мебель", "Корпусная мебель", "Другое"];

function OrderPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell
      heroTitle="Как заказать"
      heroSub="Четыре удобных способа оформить заказ"
      heroImg={home1}
    >
      {/* Order methods */}
      <section className="inner-section">
        <div className="section-tag reveal">Способы заказа</div>
        <h2 className="section-title reveal">
          Закажите удобным<br/><em>для вас способом</em>
        </h2>
        <div className="order-methods-grid" style={{ marginTop: "4rem" }}>
          {orderMethods.map((m, i) => (
            <div key={m.title} className={`order-method-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : ""}`}>
              <div className="order-method-icon">{m.icon}</div>
              <h3 className="order-method-title">{m.title}</h3>
              <p className="order-method-text">{m.text}</p>
              <a href={m.href} className="order-method-cta">{m.cta} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Process steps */}
      <section className="inner-section" style={{ background: "var(--dark)" }}>
        <div className="section-tag reveal">Этапы работы</div>
        <h2 className="section-title reveal">От заявки до <em>готовой мебели</em></h2>
        <div className="order-steps" style={{ marginTop: "4rem" }}>
          {steps.map((step, i) => (
            <div key={step.num} className={`order-step reveal${i > 0 ? ` reveal-delay-${Math.min(i % 4, 4)}` : ""}`}>
              <div className="order-step-num">{step.num}</div>
              <div className="order-step-body">
                <h3 className="order-step-title">{step.title}</h3>
                <p className="order-step-text">{step.text}</p>
              </div>
              {i < steps.length - 1 && <div className="order-step-arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Order form */}
      <section className="inner-section" id="order-form">
        <div className="inner-grid-2-narrow">
          <div>
            <div className="section-tag reveal">Онлайн-заявка</div>
            <h2 className="section-title reveal">
              Расчёт стоимости<br/>за <em>1 день</em>
            </h2>
            <p className="inner-text reveal" style={{ marginTop: "1.2rem" }}>
              Укажите тип мебели и размеры — перезвоним, уточним детали и пришлём предварительную смету бесплатно.
            </p>
            <div style={{ marginTop: "2rem" }} className="reveal reveal-delay-1">
              {["Замер, дизайн и доставка — бесплатно", "Цена фиксируется в договоре", "Гарантия 2 года на все изделия", "Срок изготовления от 25 дней"].map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: ".8rem", marginBottom: ".8rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: ".9rem" }}>✓</span>
                  <span style={{ fontSize: ".82rem", color: "var(--muted)" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            {!submitted ? (
              <form className="cta-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field"><input type="text" placeholder="Ваше имя" required /></div>
                  <div className="form-field"><input type="tel" placeholder="Телефон" required /></div>
                </div>
                <div className="form-field">
                  <select required defaultValue="">
                    <option value="" disabled>Тип мебели</option>
                    {furnitureTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form-field">
                  <textarea placeholder="Ваши пожелания / размеры помещения (необязательно)" />
                </div>
                <button type="submit" className="form-submit">
                  Получить расчёт бесплатно <span>→</span>
                </button>
                <p className="form-note">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </form>
            ) : (
              <div className="form-success" style={{ display: "block" }}>
                <h3>Заявка принята!</h3>
                <p>Мы свяжемся с вами в течение 1 часа и пришлём предварительный расчёт. Спасибо за доверие.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default OrderPage;
