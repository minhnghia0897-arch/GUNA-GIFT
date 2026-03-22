import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BestSeller from "@/components/BestSeller";
import VideoSection from "@/components/VideoSection";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import Membership from "@/components/Membership";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <BestSeller />
      <VideoSection />
      <Testimonial />
      <WhyChooseUs />
      <Membership />
      <ContactSection />
      <Footer />
    </main>
  );
}
