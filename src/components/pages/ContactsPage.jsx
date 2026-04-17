import { useState } from "react";
import PageShell from "./PageShell";
import home1 from "../assets/photos/home1.jpg";

const contactInfo = [
  { icon: "☎", label: "Телефон", value: "+7 (916) 754-03-37", href: "tel:+79167540337" },
  { icon: "✉", label: "Email", value: "info@mebel-dor.ru", href: "mailto:info@mebel-dor.ru" },
  { icon: "◎", label: "Адрес", value: "г. Ногинск, ул. Пугачёва, 1а", href: null },
  { icon: "◷", label: "Режим работы", value: "Пн–Вс, 9:00 – 20:00", href: null },
];

const socials = [
  { label: "ВКонтакте", short: "ВК", href: "#", desc: "Наши работы и акции" },
  { label: "Telegram", short: "TG", href: "#", desc: "Быстрый ответ в чате" },
  { label: "WhatsApp", short: "WA", href: "#", desc: "Написать прямо сейчас" },
];

const furnitureTypes = ["Кухня на заказ", "Шкаф-купе", "Гардеробная", "Детская мебель", "Корпусная мебель", "Другое"];

function ContactsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell
      heroTitle="Контакты"
      heroSub="Мы в Ногинске. Работаем без выходных."
      heroImg={home1}
    >
      <section className="inner-section">
        <div className="contacts-layout">
          {/* Left: contact info + map */}
          <div>
            <div className="section-tag reveal">Свяжитесь с нами</div>
            <h2 className="section-title reveal">
              Готовы ответить<br/>на любой <em>вопрос</em>
            </h2>
            <div className="contacts-info-grid reveal" style={{ marginTop: "3rem" }}>
              {contactInfo.map((c) => (
                <div key={c.label} className="contact-info-card">
                  <div className="contact-info-icon">{c.icon}</div>
                  <div>
                    <div className="contact-label">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="contact-info-value">{c.value}</a>
                    ) : (
                      <span className="contact-info-value">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ marginTop: "3rem" }} className="reveal reveal-delay-1">
              <div className="footer-col-title" style={{ marginBottom: "1.5rem" }}>Мы в соцсетях</div>
              <div className="contacts-socials">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} className="contacts-social-card">
                    <div className="contacts-social-short">{s.short}</div>
                    <div>
                      <div style={{ fontSize: ".82rem", color: "var(--cream)" }}>{s.label}</div>
                      <div style={{ fontSize: ".72rem", color: "var(--muted)", marginTop: ".2rem" }}>{s.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="map-placeholder reveal reveal-delay-2" style={{ marginTop: "3rem" }}>
              <div className="map-placeholder-inner">
                <span style={{ color: "var(--gold)", fontSize: "2rem" }}>◎</span>
                <div>
                  <div style={{ fontFamily: "var(--ff-serif)", fontSize: "1.1rem", color: "var(--cream)" }}>г. Ногинск</div>
                  <div style={{ fontSize: ".8rem", color: "var(--muted)", marginTop: ".2rem" }}>ул. Пугачёва, 1а</div>
                </div>
              </div>
              <a
                href="https://yandex.ru/maps/?text=Ногинск+ул.+Пугачёва+1а"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Открыть в Яндекс.Картах →
              </a>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="reveal reveal-delay-2">
            <div className="section-tag">Форма обратной связи</div>
            <h3 style={{ fontFamily: "var(--ff-serif)", fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 300, color: "var(--cream)", marginTop: ".8rem", marginBottom: "2rem" }}>
              Оставьте заявку —<br/><em style={{ color: "var(--gold)" }}>ответим за 1 час</em>
            </h3>
            {!submitted ? (
              <form
                className="cta-form"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <div className="form-row">
                  <div className="form-field"><input type="text" placeholder="Ваше имя" required /></div>
                  <div className="form-field"><input type="tel" placeholder="Телефон" required /></div>
                </div>
                <div className="form-field"><input type="email" placeholder="Email (необязательно)" /></div>
                <div className="form-field">
                  <select defaultValue="">
                    <option value="" disabled>Тип мебели</option>
                    {furnitureTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form-field">
                  <textarea placeholder="Ваш вопрос или описание проекта" style={{ height: "120px" }} />
                </div>
                <button type="submit" className="form-submit">
                  Отправить сообщение <span>→</span>
                </button>
                <p className="form-note">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </form>
            ) : (
              <div className="form-success" style={{ display: "block" }}>
                <h3>Сообщение отправлено!</h3>
                <p>Мы свяжемся с вами в течение 1 часа. Спасибо за обращение.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default ContactsPage;
