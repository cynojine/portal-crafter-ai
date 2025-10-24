import { Card } from "@/components/ui/card";
import { Building2, Users, Globe, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building2, label: "Established", value: "2017" },
    { icon: Globe, label: "Coverage", value: "Southern & Central Africa" },
    { icon: Users, label: "Expert Team", value: "Professional Staff" },
    { icon: Award, label: "Quality", value: "Certified Excellence" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center space-y-3 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border"
                >
                  <div className="w-14 h-14 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              Even Better Initiatives Limited was established in August 2017 in Livingstone, Zambia, with a view to meet the growing needs of purchasing and supply of general goods. Founded by Shinga Mark (Managing Director), Joseph Banda, and Moses Mtonga, we are a registered company under the laws of Zambia.
            </p>
            <p className="text-lg leading-relaxed">
              As a specialized provider of sourcing, procuring, and logistics services and solutions, we are dedicated to providing personalized, customer-specific solutions that integrate with the needs of our clients' businesses, creating value through end-to-end supervision and management.
            </p>
            <p className="text-lg leading-relaxed">
              The challenges and changes of today's dynamic business environment require vigorous efficiency and reliable products and service delivery for companies to sustain and thrive. The right sourcing and procurement partner can help drive profitability and achieve key business objectives in highly competitive industries, giving you the edge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
