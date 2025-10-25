import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Target, Zap, Globe, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Reliable & Trusted",
      description: "ISO 9001:2015 certified with a proven track record across Southern and Central Africa",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We understand deadlines matter. Our logistics ensure your supplies arrive when you need them",
    },
    {
      icon: Target,
      title: "Quality Assured",
      description: "Every product is carefully vetted to meet the highest industry standards",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Quick turnaround times and responsive customer service for all your urgent needs",
    },
    {
      icon: Globe,
      title: "Regional Expertise",
      description: "Deep understanding of supply chain logistics across multiple African countries",
    },
    {
      icon: HeartHandshake,
      title: "Client-Focused",
      description: "Your success is our success. We build long-term partnerships, not just transactions",
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Choose E.B.I?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of working with a partner committed to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">
                    {reason.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;