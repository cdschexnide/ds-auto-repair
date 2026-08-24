import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import WhyDS from "@/components/WhyDS";
import Story from "@/components/Story";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyDS />
        <Story />
        <Reviews />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
