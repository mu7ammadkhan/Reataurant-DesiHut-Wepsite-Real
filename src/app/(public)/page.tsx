import Navbar from "@/components/public/navbar";
import HeroSection from "@/components/public/hero-section";
import FeaturedItems from "@/components/public/featured-items";
import DealsSection from "@/components/public/deals-banner-section";
import AboutPreview from "@/components/public/about-preview";
import CategoryPreview from "@/components/public/category-preview";
import Footer from "@/components/public/footer";
import WhatsAppButton from "@/components/public/whatsapp-sticky-button";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedItems />
      <DealsSection />
      <AboutPreview />
      <CategoryPreview />
      <Footer />
      <WhatsAppButton />
    </>
  );
}