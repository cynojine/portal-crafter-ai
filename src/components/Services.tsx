import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Stethoscope,
  Hammer,
  Monitor,
  Printer,
  Car,
  Gem,
  Utensils,
  Zap,
  HardHat,
  ShieldCheck,
} from "lucide-react";
import medicalImage from "@/assets/medical-supplies.jpg";
import constructionImage from "@/assets/construction-materials.jpg";
import itImage from "@/assets/it-equipment.jpg";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Medical Supplies",
      description: "Hospital equipment, pharmaceuticals, and surgical tools",
    },
    {
      icon: Hammer,
      title: "Building Materials",
      description: "Cement, steel, roofing sheets, and plumbing fixtures",
    },
    {
      icon: Monitor,
      title: "IT Equipment",
      description: "Computers, servers, networking devices",
    },
    {
      icon: Printer,
      title: "Printers & Cartridges",
      description: "Office printing solutions and supplies",
    },
    {
      icon: Car,
      title: "Car Rental Services",
      description: "Reliable vehicles for corporate and personal use",
    },
    {
      icon: Gem,
      title: "Mineral Trading",
      description: "Ethical sourcing and distribution of minerals",
    },
    {
      icon: Utensils,
      title: "Food Supplies",
      description: "Fresh produce, packaged food, and beverages",
    },
    {
      icon: Zap,
      title: "Electrical Supplies",
      description: "Cables, transformers, lighting, and circuit breakers",
    },
    {
      icon: HardHat,
      title: "Mining Equipment",
      description: "Drilling machinery and excavators",
    },
    {
      icon: ShieldCheck,
      title: "Personal Protective Equipment",
      description: "Helmets, gloves, safety boots, and masks",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A dynamic company providing diverse products and services across multiple industries. 
              High-quality, cost-effective solutions making us a trusted partner across various sectors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-border hover:border-primary/50 cursor-pointer"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-subtle">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="overflow-hidden border-border hover:shadow-elevated transition-all duration-300">
              <div className="relative h-48">
                <img src={medicalImage} alt="Medical Supplies" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-hero opacity-20" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Medical Excellence</h3>
                <p className="text-muted-foreground">
                  Comprehensive medical supplies including hospital equipment, pharmaceuticals, 
                  and surgical tools from trusted manufacturers.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border hover:shadow-elevated transition-all duration-300">
              <div className="relative h-48">
                <img src={constructionImage} alt="Construction Materials" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-hero opacity-20" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Construction Solutions</h3>
                <p className="text-muted-foreground">
                  Quality building materials from cement and steel to roofing sheets 
                  and plumbing fixtures for all your projects.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border hover:shadow-elevated transition-all duration-300">
              <div className="relative h-48">
                <img src={itImage} alt="IT Equipment" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-hero opacity-20" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Technology Infrastructure</h3>
                <p className="text-muted-foreground">
                  Complete IT solutions including computers, servers, networking devices, 
                  and support equipment for modern businesses.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-hero border-0 shadow-elevated mt-8">
            <CardContent className="p-8 text-center text-primary-foreground">
              <h3 className="text-2xl font-bold mb-3">Technical Capabilities</h3>
              <p className="text-lg opacity-95 leading-relaxed max-w-4xl mx-auto">
                We have qualified and experienced staff to successfully execute projects including 
                Reticulation, Fibre Optic Installations, Distribution Substations, Turnkey Projects, 
                Electric Fencing, Gate Motors, Civil works, and General Construction from design phase to handover.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
