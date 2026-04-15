function StatsSection({ stats }) {
  return (
    <div id="stats">
      {stats.map((item, index) => (
        <div
          key={item.label}
          className={`stat-item reveal${index > 0 ? ` reveal-delay-${index}` : ""}`}
        >
          <span className="stat-num" data-count={item.count}>
            {item.value}
          </span>
          <span className="stat-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default StatsSection;
