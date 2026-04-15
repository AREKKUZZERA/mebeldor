import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const MotionDiv = motion.div;
const MotionSpan = motion.span;

function HeroSection({ onScrollToCta }) {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollPercent, setScrollPercent] = useState("00%");
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
  const scrollIndicatorYRaw = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [0, shouldReduceMotion ? 0 : 72, shouldReduceMotion ? 0 : 118],
  );
  const scrollIndicatorOpacityRaw = useTransform(
    scrollYProgress,
    [0, 0.52, 0.82, 1],
    [1, 1, shouldReduceMotion ? 1 : 0.22, 0],
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
  const scrollIndicatorY = useSpring(scrollIndicatorYRaw, {
    stiffness: 85,
    damping: 20,
    mass: 0.5,
  });
  const scrollIndicatorOpacity = useSpring(scrollIndicatorOpacityRaw, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const percent = Math.round(value * 100);
    setScrollPercent(`${percent.toString().padStart(2, "0")}%`);
  });

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

      <MotionDiv
        className="hero-scroll"
        aria-hidden="true"
        style={{
          y: scrollIndicatorY,
          opacity: scrollIndicatorOpacity,
        }}
      >
        <span className="hero-scroll-label">Scroll</span>
        <div className="hero-scroll-track">
          <MotionDiv
            className="hero-scroll-fill"
            style={{
              scaleY: useTransform(scrollYProgress, [0, 1], [0.14, 1]),
            }}
          />
        </div>
        <MotionSpan className="hero-scroll-value">{scrollPercent}</MotionSpan>
      </MotionDiv>
    </section>
  );
}

export default HeroSection;
