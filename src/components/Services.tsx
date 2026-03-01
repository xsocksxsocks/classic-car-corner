import { Car, FileCheck, Handshake, Wrench } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Car,
    title: "Geprüfte Fahrzeuge",
    description: "Jedes Auto wird vor dem Verkauf gründlich unter die Lupe genommen – damit Sie sicher fahren.",
  },
  {
    icon: FileCheck,
    title: "Alles dabei",
    description: "Serviceheft, TÜV-Berichte, alle Unterlagen – bei uns gibt es keine bösen Überraschungen.",
  },
  {
    icon: Handshake,
    title: "Faire Preise",
    description: "Was draufsteht, ist auch drin. Keine versteckten Kosten, keine Spielchen.",
  },
  {
    icon: Wrench,
    title: "Wir bleiben dran",
    description: "Auch nach dem Kauf sind wir für Sie da. Bei Fragen einfach anrufen!",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
            Was wir bieten
          </p>
          <h2 className="font-display text-primary-foreground text-4xl md:text-5xl lg:text-6xl">
            Unkompliziert & ehrlich
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-8 border border-primary-foreground/10 hover:border-terracotta transition-colors"
            >
              <service.icon className="w-10 h-10 text-terracotta mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-primary-foreground text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 pt-16 border-t border-primary-foreground/10"
        >
          <p className="text-primary-foreground/40 text-lg mb-6">
            Neugierig geworden? Wir zeigen Ihnen gern, was wir gerade da haben.
          </p>
          <a
            href="mailto:info@fabri-cars.net"
            className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-medium px-8 py-4 transition-colors text-sm tracking-wide uppercase"
          >
            Jetzt anfragen
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
