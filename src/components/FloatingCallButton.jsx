import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/floating-call-button.css";

const PHONE_NUMBER = "+7 (916) 754-03-37";
const PHONE_CLEAN = "79167540337";

function FloatingCallButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCall = () => {
    if (isMobile) {
      handleCopyPhone();
    } else {
      window.location.href = `tel:+${PHONE_CLEAN}`;
    }
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PHONE_NUMBER).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setShowTooltip(false);
    });
  };

  const handleLeaveRequest = () => {
    window.location.href = "/#/?scroll=cta";
  };

  return (
    <div className="floating-call-button">
      <div className="floating-buttons-group">
        <button
          className="request-button"
          onClick={handleLeaveRequest}
          aria-label="Оставить заявку"
          title="Оставить заявку"
        >
          <span className="request-icon">✎</span>
          <span className="request-text">Заявка</span>
        </button>

        <button
          className="call-button"
          onClick={handleCall}
          onMouseEnter={() => !isMobile && setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Позвонить"
          title="Позвонить"
        >
          <span className="call-icon">☎</span>
        </button>
      </div>

      {showTooltip && (
        <div className="call-tooltip">
          <div className="tooltip-content">
            <div className="tooltip-label">Позвонить</div>
            <a href={`tel:+${PHONE_CLEAN}`} className="tooltip-phone">
              {PHONE_NUMBER}
            </a>
          </div>
          <div className="tooltip-arrow" />
        </div>
      )}

      {copied && (
        <div className="copy-notification">
          <span className="notification-icon">✓</span>
          <span className="notification-text">Номер скопирован</span>
        </div>
      )}
    </div>
  );
}

export default FloatingCallButton;
