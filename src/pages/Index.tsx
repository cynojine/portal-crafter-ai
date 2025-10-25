import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <VisionMission />
      <Values />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
