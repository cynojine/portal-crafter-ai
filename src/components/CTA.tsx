import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary to-secondary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA4IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss how E.B.I can streamline your procurement and logistics operations
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 shadow-elevated hover:scale-105 transition-transform group"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-elevated hover:scale-105 transition-transform"
              onClick={() => window.location.href = 'tel:+260975470816'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </div>

          <div className="pt-12 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <Phone className="h-6 w-6 text-primary-foreground" />
              <div className="text-left">
                <p className="text-sm text-primary-foreground/80">Call us</p>
                <p className="font-semibold text-primary-foreground">+260 975 470 816</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <Mail className="h-6 w-6 text-primary-foreground" />
              <div className="text-left">
                <p className="text-sm text-primary-foreground/80">Email us</p>
                <p className="font-semibold text-primary-foreground">info@ebi.co.zm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;