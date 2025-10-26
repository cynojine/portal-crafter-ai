import { Card } from "@/components/ui/card";
import { Truck, Clock, Shield, ThumbsUp, Target, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Efficient logistics ensuring timely delivery across all regions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your needs",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All products meet international quality standards",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ThumbsUp,
      title: "Best Prices",
      description: "Competitive pricing without compromising on quality",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Custom procurement strategies for your business",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "Leveraging technology for better service delivery",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose E.B.I?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience excellence in procurement and logistics with our comprehensive solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border group relative overflow-hidden animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
