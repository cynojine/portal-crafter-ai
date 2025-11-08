import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import teamImage from "@/assets/team-collaboration.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-[48px]">
        <div className="absolute inset-0">
          <img 
            src={teamImage} 
            alt="About Even Better Initiatives" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            About Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Your trusted partner in procurement and logistics solutions since 2017
          </p>
        </div>
      </section>

      <About />
      <Stats />
      <VisionMission />
      <Timeline />
      <Achievements />
      <Values />
      
      <Footer />
    </div>
  );
};

export default AboutPage;
