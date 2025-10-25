import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import logisticsHero from "@/assets/hero-logistics.jpg";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-[68px]">
        <div className="absolute inset-0">
          <img 
            src={logisticsHero} 
            alt="Our Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Comprehensive procurement solutions across multiple industries
          </p>
        </div>
      </section>

      <Services />
      <WhyChooseUs />
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
