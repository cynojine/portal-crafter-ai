import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, Users, Heart, MessageSquare, CheckCircle } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Environmental, Health & Safety",
      points: [
        "Protection of the environment for future generations",
        "Quality service & product delivery",
        "Commitment to health and safety",
        "Compliance with all applicable laws",
      ],
    },
    {
      icon: Target,
      title: "Consistency",
      points: [
        "Understanding our business environment",
        "Quality Control Management",
        "Delivering projects on time and within budget",
      ],
    },
    {
      icon: Users,
      title: "Our Customers",
      points: [
        "Understand the needs of our customers",
        "Promote mutually beneficial relationships",
        "Deliver service that exceeds expectations",
      ],
    },
    {
      icon: Heart,
      title: "Our Staff",
      points: [
        "Respect and care for their wellbeing",
        "Qualified and experienced personnel",
        "Atmosphere of trust and empowerment",
      ],
    },
    {
      icon: CheckCircle,
      title: "Honesty & Integrity",
      points: ["Always do the right thing"],
    },
    {
      icon: MessageSquare,
      title: "Effective Communications",
      points: ["Consistent, true, and concise communication"],
    },
  ];

  return (
    <section id="values" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Committed to strong leadership to achieve excellence, accountability, and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {value.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                          <span className="text-sm text-foreground/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
