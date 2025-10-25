import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Lusaka - Zambia"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(+260) 972 902432", "(+260) 963 412804"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["evenbetterinvestments@gmail.com"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Our team is ready to help you find the perfect procurement solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border"
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-foreground/80">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="text-lg px-8"
              onClick={() => window.location.href = '/contact'}
            >
              View Full Contact Information
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
