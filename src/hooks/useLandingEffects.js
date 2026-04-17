import { useEffect } from "react";

export function useLandingEffects() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    if (!navbar) return undefined;

    // Scroll handler for navbar
    const handleScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 60);
    };

    // Reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    // Count animation
    const animateCount = (element, target, suffix = "") => {
      const duration = 1600;
      let startTime = 0;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.floor(eased * target).toLocaleString("ru-RU")}${suffix}`;
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count ?? "0", 10);
          const suffix = el.textContent?.includes("+") || target > 100 ? "+" : "";
          animateCount(el, target, suffix);
          countObserver.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const allReveal = document.querySelectorAll(".reveal");
    allReveal.forEach((el) => revealObserver.observe(el));

    const allCount = document.querySelectorAll("[data-count]");
    allCount.forEach((el) => countObserver.observe(el));

    // Cursor — only on non-touch devices
    let frameId = 0;
    const isTouchDevice = window.matchMedia("(hover: none)").matches;

    if (cursor && ring && !isTouchDevice) {
      let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
      const onMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      };
      const animate = () => {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        frameId = requestAnimationFrame(animate);
      };
      document.addEventListener("mousemove", onMove);
      animate();

      return () => {
        cancelAnimationFrame(frameId);
        document.removeEventListener("mousemove", onMove);
        window.removeEventListener("scroll", handleScroll);
        revealObserver.disconnect();
        countObserver.disconnect();
      };
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      revealObserver.disconnect();
      countObserver.disconnect();
    };
  }, []);
}
