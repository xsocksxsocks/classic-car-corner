import { Car, FileCheck, Handshake, Wrench } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Quality Vehicles",
    description: "Carefully selected pre-owned cars, each one inspected and road-tested before sale.",
  },
  {
    icon: FileCheck,
    title: "Full Documentation",
    description: "Complete service history and paperwork for every vehicle we sell. No surprises.",
  },
  {
    icon: Handshake,
    title: "Fair Deals",
    description: "Honest pricing with no hidden fees. What you see is what you pay.",
  },
  {
    icon: Wrench,
    title: "After-Sale Support",
    description: "We're here even after you drive away. Questions? Just give us a call.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-primary-foreground text-4xl md:text-5xl lg:text-6xl">
            Simple, Honest Service
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-primary-foreground/10 hover:border-terracotta transition-colors"
            >
              <service.icon className="w-10 h-10 text-terracotta mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-primary-foreground text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-16 pt-16 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/40 text-lg mb-6">
            Interested in seeing our current inventory?
          </p>
          <a
            href="tel:+4915784227058"
            className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-medium px-8 py-4 transition-colors text-sm tracking-wide uppercase"
          >
            Give Us a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
