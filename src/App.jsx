import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import OrderPage from "./components/pages/OrderPage";
import GalleryPage from "./components/pages/GalleryPage";
import ContactsPage from "./components/pages/ContactsPage";
import "./styles/app.css";
import "./styles/landing.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/o-kompanii" element={<AboutPage />} />
        <Route path="/uslugi" element={<ServicesPage />} />
        <Route path="/kak-zakazat" element={<OrderPage />} />
        <Route path="/galereya" element={<GalleryPage />} />
        <Route path="/kontakty" element={<ContactsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
