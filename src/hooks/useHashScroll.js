import { useEffect } from "react";

export function useHashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      // Удаляем # и ищем элемент
      const elementId = hash.slice(1);
      const element = document.getElementById(elementId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    // Вызываем при загрузке страницы
    scrollToHash();

    // Вызываем при изменении hash
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);
}
