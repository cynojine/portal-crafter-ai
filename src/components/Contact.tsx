import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Shop No. 3 Kamwala", "Lusaka - Zambia"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(+260) 972 902432", "(+260) 963 412804"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["evenbetterinvestments@gmail.com"],
    },
    {
      icon: Building2,
      title: "Bank",
      details: ["First National Bank (FNB)", "Account: 63034979592"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground">
              Get in touch with our team for all your procurement and supply needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <Card className="bg-gradient-accent border-0 shadow-elevated">
            <CardContent className="p-8 text-center text-secondary-foreground">
              <h3 className="text-2xl font-bold mb-3">
                Registration Details
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
                <div>
                  <p className="font-semibold">Company Registration:</p>
                  <p className="opacity-90">120220043201</p>
                </div>
                <div className="hidden sm:block w-px h-12 bg-secondary-foreground/20" />
                <div>
                  <p className="font-semibold">TPIN:</p>
                  <p className="opacity-90">2000826899</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
