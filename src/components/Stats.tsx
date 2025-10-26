import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Package, Award } from "lucide-react";
import { useEffect, useState } from "react";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: 500,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered across multiple sectors",
    },
    {
      icon: Users,
      value: 200,
      suffix: "+",
      label: "Happy Clients",
      description: "Trusted by businesses across Africa",
    },
    {
      icon: Package,
      value: 10,
      suffix: "K+",
      label: "Products Supplied",
      description: "Quality products across all categories",
    },
    {
      icon: Award,
      value: 8,
      suffix: "+",
      label: "Years Experience",
      description: "Proven track record since 2017",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const [count, setCount] = useState(0);

              useEffect(() => {
                const duration = 2000;
                const steps = 50;
                const increment = stat.value / steps;
                let current = 0;

                const timer = setInterval(() => {
                  current += increment;
                  if (current >= stat.value) {
                    setCount(stat.value);
                    clearInterval(timer);
                  } else {
                    setCount(Math.floor(current));
                  }
                }, duration / steps);

                return () => clearInterval(timer);
              }, [stat.value]);

              return (
                <Card
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-8 text-center space-y-4 hover:bg-primary-foreground/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="w-16 h-16 bg-primary-foreground rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-primary-foreground mb-2 tabular-nums">
                      {count}{stat.suffix}
                    </p>
                    <p className="text-xl font-semibold text-primary-foreground mb-2">
                      {stat.label}
                    </p>
                    <p className="text-sm text-primary-foreground/90 leading-relaxed">
                      {stat.description}
                    </p>
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

export default Stats;