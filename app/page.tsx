import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Slogan } from "@/components/Slogan";
import { HeroSlider } from "@/components/HeroSlider";
import { FeaturedVideoGrid } from "@/components/FeaturedVideoGrid";
import { ProductRow } from "@/components/ProductRow";
import { CampaignsBanner } from "@/components/CampaignsBanner";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Slogan />
      <main>
        <HeroSlider />
        <FeaturedVideoGrid />
        <ProductRow />
        <CampaignsBanner />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
