import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactInfo from "@/components/ContactInfo";
import SocialMedia from "@/components/SocialMedia";
import DownloadSection from "@/components/DownloadSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ContactInfo />
        <SocialMedia />
        <DownloadSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
