import { useEffect } from "react";
import LandingPage from "./components/landing/LandingPage";

function App() {
  useEffect(() => {
    document.title = "МебельДор — Мебель на заказ из массива дерева";
  }, []);

  return <LandingPage />;
}

export default App;
