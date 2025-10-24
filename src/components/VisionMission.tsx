import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Rocket, CheckCircle2 } from "lucide-react";

const VisionMission = () => {
  const missionPoints = [
    "Develop and implement systems and procedures that deliver consistent results",
    "Invest in technology to streamline our operational capability",
    "Understand our clients' needs, thereby providing a better service",
    "Promote safety, development, and well-being of our employees",
  ];

  return (
    <section id="vision" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 shadow-elevated hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-foreground/90">
                  Even Better Initiatives Limited is committed to being a leading general supplies company in Southern and Central Africa. This will be achieved through hard work, integrity, and dedication to deliver consistent results that will add long-term value to all our clients and stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 shadow-elevated hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                      <span className="text-foreground/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
