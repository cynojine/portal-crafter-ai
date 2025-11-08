import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Search, ShoppingCart, Truck, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: ClipboardList,
      number: "01",
      title: "Requirement Analysis",
      description: "We carefully assess your procurement needs, specifications, and delivery timelines to ensure complete understanding.",
    },
    {
      icon: Search,
      number: "02",
      title: "Supplier Sourcing",
      description: "Our expert team identifies and evaluates the best suppliers, ensuring quality products at competitive prices.",
    },
    {
      icon: ShoppingCart,
      number: "03",
      title: "Procurement & Quality Check",
      description: "We handle the entire purchasing process with rigorous quality control checks on all items.",
    },
    {
      icon: Truck,
      number: "04",
      title: "Logistics & Delivery",
      description: "Efficient transportation and on-time delivery to your specified location with real-time tracking.",
    },
    {
      icon: CheckCircle,
      number: "05",
      title: "Post-Delivery Support",
      description: "Continuous support and follow-up to ensure complete satisfaction and address any concerns.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">How We Work</h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined 5-step process ensures efficiency, quality, and complete client satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-border overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-bl-full" />
                <CardContent className="p-6 relative">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-5xl font-bold text-muted/20 absolute top-4 right-4">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
