function CtaSection({
  benefits,
  furnitureTypes,
  isFormSubmitted,
  onSubmit,
}) {
  return (
    <section id="cta">
      <div className="cta-inner">
        <div className="cta-text">
          <div className="section-tag reveal">Начните сейчас</div>
          <h2 className="cta-title reveal">
            Оставьте заявку —
            <br />
            расчёт за <em>1 день</em>
          </h2>
          <p className="cta-sub reveal">
            Укажите тип мебели и размеры — мы перезвоним, уточним детали и
            пришлём предварительную смету бесплатно. Никаких обязательств.
          </p>
          <div style={{ marginTop: "2.5rem" }} className="reveal reveal-delay-1">
            <div style={{ display: "flex", flexDirection: "column", gap: ".8rem" }}>
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  style={{ display: "flex", alignItems: "center", gap: ".8rem" }}
                >
                  <span style={{ color: "var(--gold)", fontSize: ".9rem" }}>✓</span>
                  <span style={{ fontSize: ".82rem", color: "var(--muted)" }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="reveal reveal-delay-2">
          {!isFormSubmitted ? (
            <div id="formWrap">
              <form className="cta-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <input type="text" placeholder="Ваше имя" required />
                  </div>
                  <div className="form-field">
                    <input type="tel" placeholder="Телефон" required />
                  </div>
                </div>
                <div className="form-field">
                  <select required defaultValue="">
                    <option value="" disabled>
                      Тип мебели
                    </option>
                    {furnitureTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <textarea placeholder="Ваши пожелания / размеры помещения (необязательно)" />
                </div>
                <button type="submit" className="form-submit">
                  Получить расчёт бесплатно
                  <span>→</span>
                </button>
                <p className="form-note">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          ) : (
            <div className="form-success" id="formSuccess" style={{ display: "block" }}>
              <h3>Заявка принята!</h3>
              <p>
                Мы свяжемся с вами в течение 1 часа и пришлём предварительный
                расчёт. Спасибо за доверие.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
