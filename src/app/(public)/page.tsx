import Hero from "@/components/public/hero-section";
import QuickInfoStrip from "@/components/public/quick-info-strip";
import HighlightsStrip from "@/components/public/highlights-strip";
import CategoryPreview from "@/components/public/category-preview";
import FeaturedItems from "@/components/public/featured-items";
import DealsBannerSection from "@/components/public/deals-banner-section";
import GalleryPreview from "@/components/public/gallery-preview";
import AboutPreview from "@/components/public/about-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickInfoStrip />
      <HighlightsStrip />
      <CategoryPreview />
      <FeaturedItems />
      <DealsBannerSection />
      <AboutPreview />
      <GalleryPreview />
    </>
  );
}