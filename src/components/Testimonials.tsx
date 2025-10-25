import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Mwansa",
      role: "Hospital Administrator",
      company: "Central Medical Centre",
      content: "E.B.I has been instrumental in ensuring our medical supplies arrive on time, every time. Their attention to detail and reliability is unmatched.",
      rating: 5,
    },
    {
      name: "James Banda",
      role: "Project Manager",
      company: "BuildTech Construction",
      content: "Working with E.B.I on our construction projects has been a game-changer. They understand our needs and deliver quality materials consistently.",
      rating: 5,
    },
    {
      name: "Patricia Lungu",
      role: "IT Director",
      company: "TechServe Solutions",
      content: "Their expertise in IT equipment procurement has helped us stay ahead. Fast, reliable, and always professional.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses across Southern and Central Africa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <CardContent className="p-8 space-y-6">
                <Quote className="h-10 w-10 text-primary/30" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;