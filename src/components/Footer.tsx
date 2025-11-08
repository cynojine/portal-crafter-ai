import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">E.B.I Limited</h3>
            <p className="text-secondary-foreground/80 text-sm">
              Your trusted partner in procurement, logistics, and supply chain solutions.
            </p>
            <p className="text-sm font-semibold text-primary-light">
              It only gets Better!
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#about" className="text-secondary-foreground/80 hover:text-primary-light transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#services" className="text-secondary-foreground/80 hover:text-primary-light transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#vision" className="text-secondary-foreground/80 hover:text-primary-light transition-colors">
                  Vision & Mission
                </a>
              </li>
              <li>
                <a href="/contact" className="text-secondary-foreground/80 hover:text-primary-light transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-secondary-foreground/80">Medical Supplies</li>
              <li className="text-secondary-foreground/80">Construction Materials</li>
              <li className="text-secondary-foreground/80">IT Equipment</li>
              <li className="text-secondary-foreground/80">Logistics Solutions</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary-light mt-1 flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  Twin Palms Area, Lusaka, Zambia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-light flex-shrink-0" />
                <a href="tel:+260975470816" className="text-secondary-foreground/80 hover:text-primary-light transition-colors">
                  +260 975 470 816
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-light flex-shrink-0" />
                <a href="mailto:info@ebi-zm.com" className="text-secondary-foreground/80 hover:text-primary-light transition-colors">
                  info@ebi-zm.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary-light flex-shrink-0" />
                <span className="text-secondary-foreground/80">www.ebi-zm.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Even Better Initiatives Limited. All rights reserved.
            </p>
            <p className="text-sm text-secondary-foreground/60">
              ISO 9001:2015 Certified
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
