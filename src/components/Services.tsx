import { Car, FileCheck, Handshake, Wrench } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Qualitätsfahrzeuge",
    description: "Sorgfältig ausgewählte Gebrauchtwagen, jedes Fahrzeug wird vor dem Verkauf geprüft und probegefahren.",
  },
  {
    icon: FileCheck,
    title: "Vollständige Dokumentation",
    description: "Komplette Servicehistorie und Unterlagen für jedes Fahrzeug. Keine Überraschungen.",
  },
  {
    icon: Handshake,
    title: "Faire Angebote",
    description: "Ehrliche Preise ohne versteckte Gebühren. Was Sie sehen, ist was Sie zahlen.",
  },
  {
    icon: Wrench,
    title: "After-Sales Service",
    description: "Wir sind auch nach dem Kauf für Sie da. Fragen? Rufen Sie uns einfach an.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
            Unsere Leistungen
          </p>
          <h2 className="font-display text-primary-foreground text-4xl md:text-5xl lg:text-6xl">
            Einfacher, ehrlicher Service
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
            Interesse an unserem aktuellen Angebot?
          </p>
          <a
            href="tel:+4915784227058"
            className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-medium px-8 py-4 transition-colors text-sm tracking-wide uppercase"
          >
            Rufen Sie Uns An
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
