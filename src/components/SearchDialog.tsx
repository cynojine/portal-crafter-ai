import { useState } from "react";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface SearchResult {
  title: string;
  description: string;
  link: string;
  category: string;
}

const SearchDialog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  const searchableContent: SearchResult[] = [
    // Services
    { title: "Medical Supplies", description: "Hospital equipment, pharmaceuticals, and surgical tools", link: "/services#medical", category: "Services" },
    { title: "Building Materials", description: "Cement, steel, roofing sheets, and plumbing fixtures", link: "/services#construction", category: "Services" },
    { title: "IT Equipment", description: "Computers, servers, networking devices", link: "/services#it", category: "Services" },
    { title: "Printers & Cartridges", description: "Office printing solutions and supplies", link: "/services#printers", category: "Services" },
    { title: "Car Rental Services", description: "Reliable vehicles for corporate and personal use", link: "/services#rental", category: "Services" },
    { title: "Mineral Trading", description: "Ethical sourcing and distribution of minerals", link: "/services#minerals", category: "Services" },
    { title: "Food Supplies", description: "Fresh produce, packaged food, and beverages", link: "/services#food", category: "Services" },
    { title: "Electrical Supplies", description: "Cables, transformers, lighting, and circuit breakers", link: "/services#electrical", category: "Services" },
    { title: "Mining Equipment", description: "Drilling machinery and excavators", link: "/services#mining", category: "Services" },
    { title: "Personal Protective Equipment", description: "Helmets, gloves, safety boots, and masks", link: "/services#ppe", category: "Services" },
    
    // About
    { title: "About Us", description: "Learn about Even Better Initiatives Limited, established in 2017", link: "/about", category: "Company" },
    { title: "Our Vision", description: "To be Africa's most preferred procurement partner", link: "/#vision", category: "Company" },
    { title: "Our Mission", description: "Delivering quality procurement solutions that exceed expectations", link: "/#vision", category: "Company" },
    { title: "Our Values", description: "Excellence, Integrity, Innovation, Customer Focus, Sustainability", link: "/#values", category: "Company" },
    
    // Contact
    { title: "Contact Us", description: "Get in touch with our team", link: "/contact", category: "Contact" },
    { title: "Email", description: "evenbetterinvestments@gmail.com", link: "/contact", category: "Contact" },
    { title: "Phone", description: "Call us at (+260) 972 902432 or (+260) 963 412804", link: "/contact", category: "Contact" },
  ];

  const filteredResults = searchQuery.trim()
    ? searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleResultClick = (link: string) => {
    setOpen(false);
    setSearchQuery("");
    window.location.href = link;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground">
          <Search className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 flex-grow overflow-hidden flex flex-col">
          <Input
            type="search"
            placeholder="Search for services, information..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
            autoFocus
          />
          <div className="flex-grow overflow-y-auto space-y-3">
            {searchQuery.trim() === "" ? (
              <p className="text-center text-muted-foreground py-8">
                Start typing to search...
              </p>
            ) : filteredResults.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No results found for "{searchQuery}"
              </p>
            ) : (
              filteredResults.map((result, index) => (
                <Card
                  key={index}
                  className="p-4 cursor-pointer hover:bg-muted transition-colors"
                  onClick={() => handleResultClick(result.link)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {result.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {result.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
