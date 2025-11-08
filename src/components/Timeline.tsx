import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Timeline = () => {
  const milestones = [
    {
      year: "2017",
      title: "Company Founded",
      description: "Even Better Initiatives was established in Lusaka, Zambia with a vision to revolutionize procurement solutions.",
    },
    {
      year: "2018",
      title: "First Major Contract",
      description: "Secured partnership with leading construction firms, delivering materials across multiple project sites.",
    },
    {
      year: "2019",
      title: "Medical Sector Expansion",
      description: "Expanded into medical supplies procurement, serving hospitals and healthcare facilities nationwide.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced logistics tracking systems and digital procurement platforms.",
    },
    {
      year: "2022",
      title: "Regional Growth",
      description: "Extended operations to neighboring countries, establishing a regional supply network.",
    },
    {
      year: "2024",
      title: "Excellence Award",
      description: "Recognized as a leading procurement partner with over 150+ successful projects completed.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Our Journey</h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, innovation, and excellence in procurement solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-accent hidden md:block" />
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="ml-0 md:ml-20 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="absolute left-6 -translate-x-1/2 w-8 h-8 bg-gradient-hero rounded-full hidden md:flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
