import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
