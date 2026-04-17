import { useCallback } from "react";

export function useSmoothNavigation() {
  const handleNavigation = useCallback((href) => {
    const shell = document.querySelector(".landing-shell");
    if (shell) {
      shell.style.transition = "opacity 0.3s ease-out";
      shell.style.opacity = "0";

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    } else {
      window.location.href = href;
    }
  }, []);

  return { handleNavigation };
}
