import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import contactHero from "@/assets/contact-hero.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Lusaka - Zambia"],
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
      title: "Bank Details",
      details: ["First National Bank (FNB)", "Account: 63034979592"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-[48px]">
        <div className="absolute inset-0">
          <img 
            src={contactHero} 
            alt="Contact E.B.I" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to optimize your supply chain? Our team is here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Contact Information
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground">
                Multiple ways to reach us for all your procurement needs
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

            {/* Business Hours Card */}
            <Card className="border-primary/20 shadow-elevated">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-foreground/80">
                      <div>
                        <p className="font-semibold text-foreground">Monday - Friday</p>
                        <p>8:00 AM - 5:00 PM</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Saturday</p>
                        <p>9:00 AM - 1:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-border hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary-foreground">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Quick Response</h3>
                  <p className="text-muted-foreground">
                    We respond to all inquiries within 24 hours to ensure your projects stay on track.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary-foreground">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Expert Consultation</h3>
                  <p className="text-muted-foreground">
                    Our experienced team provides personalized solutions tailored to your needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary-foreground">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Reliable Delivery</h3>
                  <p className="text-muted-foreground">
                    On-time delivery and quality assurance for all your procurement requirements.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-hero border-0 shadow-elevated">
              <CardContent className="p-12 text-center text-primary-foreground">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Work Together?
                </h3>
                <p className="text-lg opacity-95 mb-6 max-w-2xl mx-auto">
                  Let's discuss how Even Better Initiatives can streamline your supply chain 
                  and help your business thrive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="text-lg px-8"
                    onClick={() => window.location.href = 'mailto:evenbetterinvestments@gmail.com'}
                  >
                    Send Email
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    onClick={() => window.location.href = 'tel:+260972902432'}
                  >
                    Call Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
