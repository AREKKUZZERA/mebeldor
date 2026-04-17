import { useState } from "react";
import {
  advantages, catalogItems, contacts, ctaBenefits,
  footerColumns, furnitureTypes, galleryItems,
  mobileNavigationLinks, navigationLinks,
  processSteps, reviews, socialLinks, stats, trustMetrics,
} from "../../content/landingData";
import { useLandingEffects } from "../../hooks/useLandingEffects";
import { useHashScroll } from "../../hooks/useHashScroll";
import AdvantagesSection from "./AdvantagesSection";
import CatalogSection from "./CatalogSection";
import CtaSection from "./CtaSection";
import FooterSection from "./FooterSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import ProcessSection from "./ProcessSection";
import ReviewsSection from "./ReviewsSection";
import StatsSection from "./StatsSection";

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useLandingEffects();
  useHashScroll();

  const scrollToCta = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="landing-shell">
      <MobileMenu
        isOpen={isMobileMenuOpen}
        links={mobileNavigationLinks}
        onClose={() => setIsMobileMenuOpen(false)}
        onScrollToCta={scrollToCta}
      />
      <Navbar
        links={navigationLinks}
        onOpenMenu={() => setIsMobileMenuOpen(true)}
        onScrollToCta={scrollToCta}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <HeroSection onScrollToCta={scrollToCta} />
      <StatsSection stats={stats} />
      <AdvantagesSection advantages={advantages} />
      <CatalogSection items={catalogItems} />
      <ProcessSection steps={processSteps} />
      <GallerySection items={galleryItems} />
      <ReviewsSection trustMetrics={trustMetrics} reviews={reviews} />
      <CtaSection
        benefits={ctaBenefits}
        furnitureTypes={furnitureTypes}
        isFormSubmitted={isFormSubmitted}
        onSubmit={(e) => { e.preventDefault(); setIsFormSubmitted(true); }}
      />
      <FooterSection
        footerColumns={footerColumns}
        contacts={contacts}
        socialLinks={socialLinks}
      />
    </div>
  );
}

export default LandingPage;
