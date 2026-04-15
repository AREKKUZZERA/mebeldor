const reviewStars = Array.from({ length: 5 }, (_, index) => index);

function ReviewsSection({ trustMetrics, reviews }) {
  return (
    <section id="reviews">
      <div className="reviews-layout">
        <div className="reviews-info">
          <div className="section-tag reveal">Говорят клиенты</div>
          <h2 className="section-title reveal">
            Отзывы и <em>доверие</em>
          </h2>
          <div className="trust-numbers">
            {trustMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`trust-item reveal${index > 0 ? ` reveal-delay-${index}` : ""}`}
              >
                <div className="trust-num">{metric.value}</div>
                <div className="trust-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="review-cards">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className={`review-card reveal${index > 0 ? ` reveal-delay-${index}` : ""}`}
            >
              <div className="review-stars">
                {reviewStars.map((star) => (
                  <span key={star} className="star">
                    ★
                  </span>
                ))}
              </div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <div className="review-avatar">{review.avatar}</div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-date">{review.date}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
