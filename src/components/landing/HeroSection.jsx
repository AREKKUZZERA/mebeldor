import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const MotionDiv = motion.div;

function HeroSection({ onScrollToCta }) {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgYRaw = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 120]);
  const bgScaleRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [1.05, shouldReduceMotion ? 1.05 : 1.12],
  );
  const contentYRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : -56],
  );
  const contentOpacityRaw = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, shouldReduceMotion ? 1 : 0.92, shouldReduceMotion ? 1 : 0.58],
  );
  const veilOpacityRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0.2, shouldReduceMotion ? 0.2 : 0.45],
  );
  const orbOneYRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : -90],
  );
  const orbTwoYRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : 120],
  );

  const bgY = useSpring(bgYRaw, { stiffness: 110, damping: 24, mass: 0.35 });
  const bgScale = useSpring(bgScaleRaw, { stiffness: 110, damping: 24, mass: 0.42 });
  const contentY = useSpring(contentYRaw, { stiffness: 120, damping: 26, mass: 0.4 });
  const contentOpacity = useSpring(contentOpacityRaw, {
    stiffness: 120,
    damping: 26,
    mass: 0.45,
  });
  const veilOpacity = useSpring(veilOpacityRaw, {
    stiffness: 90,
    damping: 22,
    mass: 0.35,
  });
  const orbOneY = useSpring(orbOneYRaw, { stiffness: 90, damping: 22, mass: 0.45 });
  const orbTwoY = useSpring(orbTwoYRaw, { stiffness: 90, damping: 22, mass: 0.45 });

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-media">
        <MotionDiv
          className="hero-stage"
          style={{
            y: bgY,
            scale: bgScale,
          }}
        >
          <div className="hero-bg" />
          <MotionDiv className="hero-veil" style={{ opacity: veilOpacity }} />
          <MotionDiv className="hero-orb hero-orb-left" style={{ y: orbOneY }} />
          <MotionDiv className="hero-orb hero-orb-right" style={{ y: orbTwoY }} />
          <div className="hero-grid" />
        </MotionDiv>
      </div>

      <MotionDiv
        className="hero-content"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <div className="hero-badge">Массив дерева · Ногинск · с 2003 года</div>
        <h1 className="hero-title">
          Мебель на заказ
          <br />
          под <em>ваш</em> интерьер
        </h1>
        <p className="hero-sub">
          Индивидуальный дизайн, собственное производство и бесплатный замер.
          Создаём кухни, шкафы и гардеробные, которые живут вместе с вами.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onScrollToCta}>
            Рассчитать стоимость
          </button>
          <a href="#catalog" className="btn-outline">
            Смотреть работы <span>↓</span>
          </a>
        </div>
      </MotionDiv>

      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-label">Scroll</span>
        <div className="hero-scroll-track">
          <div className="hero-scroll-fill" />
        </div>
        <span className="hero-scroll-value">00%</span>
      </div>
    </section>
  );
}

export default HeroSection;
