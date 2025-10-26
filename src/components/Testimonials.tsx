import { Card } from "@/components/ui/card";
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
    <section id="testimonials" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses across Southern and Central Africa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 space-y-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-border bg-card group relative overflow-hidden animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-6">
                <Quote className="h-12 w-12 text-primary/20 group-hover:text-primary/40 transition-colors duration-500" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-scale-in"
                      style={{ 
                        animationDelay: `${(index * 0.15) + (i * 0.1)}s`,
                        animationFillMode: 'both'
                      }}
                    />
                  ))}
                </div>

                <p className="text-foreground/90 leading-relaxed text-base">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium mt-1">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;