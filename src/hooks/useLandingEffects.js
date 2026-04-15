import { useEffect } from "react";

export function useLandingEffects() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    const navbar = document.getElementById("navbar");
    const hero = document.getElementById("hero");
    const stats = document.getElementById("stats");
    const heroScroll = document.querySelector(".hero-scroll");
    const heroScrollValue = document.querySelector(".hero-scroll-value");

    if (!cursor || !ring || !navbar) {
      return undefined;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let ringFrameId = 0;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      ringFrameId = window.requestAnimationFrame(animateRing);
    };

    const handleScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 60);

      if (!hero || !stats || !heroScroll || !heroScrollValue) {
        return;
      }

      const heroRect = hero.getBoundingClientRect();
      const statsRect = stats.getBoundingClientRect();
      const scrolledPastHero = Math.max(-heroRect.top, 0);
      const heroTravel = Math.max(hero.offsetHeight, 1);
      const progress = Math.min(scrolledPastHero / heroTravel, 1);
      const translateY = scrolledPastHero * 1.22;
      const percent = Math.round(progress * 100);
      const isHeroVisible = heroRect.bottom > 0 && heroRect.top < window.innerHeight;
      const heroScrollRect = heroScroll.getBoundingClientRect();
      const fadeDistance = 120;
      const overlap = heroScrollRect.bottom - statsRect.top;
      const fadeProgress = Math.min(Math.max(overlap / fadeDistance, 0), 1);
      const opacity = 1 - fadeProgress;

      heroScroll.style.transform = `translate3d(0, ${translateY}px, 0)`;
      heroScroll.style.opacity = isHeroVisible ? `${opacity}` : "0";
      heroScroll.style.setProperty("--hero-scroll-progress", progress.toString());
      heroScrollValue.textContent = `${percent.toString().padStart(2, "0")}%`;
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const animateCount = (element, target, suffix = "") => {
      const duration = 1800;
      let startTime = 0;

      const step = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        element.textContent = `${value.toLocaleString("ru-RU")}${suffix}`;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target;
          const target = Number.parseInt(element.dataset.count ?? "0", 10);
          const suffix =
            element.textContent?.includes("+") || target > 100 ? "+" : "";

          animateCount(element, target, suffix);
          countObserver.unobserve(element);
        });
      },
      { threshold: 0.5 },
    );

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    document.querySelectorAll(".reveal").forEach((element) => {
      revealObserver.observe(element);
    });

    document.querySelectorAll("[data-count]").forEach((element) => {
      countObserver.observe(element);
    });

    animateRing();
    handleScroll();

    return () => {
      window.cancelAnimationFrame(ringFrameId);
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      revealObserver.disconnect();
      countObserver.disconnect();
    };
  }, []);
}
