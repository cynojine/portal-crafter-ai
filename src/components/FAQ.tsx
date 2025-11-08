import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We serve a diverse range of industries including construction, healthcare, IT, agriculture, and more. Our procurement expertise spans across construction materials, medical supplies, IT equipment, and agricultural products.",
    },
    {
      question: "What is your delivery timeframe?",
      answer: "Delivery times vary depending on the product type and quantity. Standard items are typically delivered within 3-7 business days, while specialized equipment may take 2-4 weeks. We provide detailed timelines during the quotation process.",
    },
    {
      question: "Do you offer international sourcing?",
      answer: "Yes, we have established partnerships with suppliers globally. We can source specialized equipment and materials from international markets while ensuring quality standards and managing all import logistics.",
    },
    {
      question: "How do you ensure product quality?",
      answer: "We implement rigorous quality control measures including supplier verification, product inspections, quality certifications, and compliance checks. All items undergo thorough evaluation before delivery.",
    },
    {
      question: "What payment terms do you offer?",
      answer: "We offer flexible payment terms tailored to your business needs. Options include advance payment, partial payment schedules, and credit terms for established clients. Bank details are provided upon contract agreement.",
    },
    {
      question: "Can you handle bulk orders?",
      answer: "Absolutely! We specialize in handling bulk procurement for large-scale projects. Our logistics network and supplier relationships enable us to efficiently manage high-volume orders while maintaining competitive pricing.",
    },
    {
      question: "Do you provide after-sales support?",
      answer: "Yes, we offer comprehensive post-delivery support including warranty management, technical assistance, and product replacement services. Our team remains available to address any concerns after delivery.",
    },
    {
      question: "How can I request a quotation?",
      answer: "You can request a quotation by contacting us via phone, email, or through our website. Provide details about your requirements, and our team will respond with a detailed quotation within 24-48 hours.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our procurement services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
