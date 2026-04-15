function ProcessSection({ steps }) {
  return (
    <section id="process">
      <div className="section-tag reveal">Путь к вашей мебели</div>
      <h2 className="section-title reveal">
        Как мы <em>работаем</em>
      </h2>
      <div className="process-grid">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`process-step reveal${index > 0 ? ` reveal-delay-${index}` : ""}`}
          >
            <div className="step-num">{index + 1}</div>
            <div className="step-title">{step.title}</div>
            <p className="step-text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
