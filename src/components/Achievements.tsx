import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Briefcase, TrendingUp } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Awarded 'Excellence in Procurement' for three consecutive years by the Zambia Chamber of Commerce.",
    },
    {
      icon: Users,
      title: "Client Satisfaction",
      description: "Maintained 98% client satisfaction rate with over 150+ completed projects across multiple sectors.",
    },
    {
      icon: Briefcase,
      title: "Strategic Partnerships",
      description: "Established partnerships with 50+ verified suppliers across Africa, Asia, and Europe.",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Achieved 45% year-over-year growth, expanding our services to regional markets.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Our Achievements</h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized for excellence and trusted by businesses across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-border bg-gradient-to-br from-background to-muted/20"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
