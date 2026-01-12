import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-warm-white">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - headline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
              Über uns
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Mehr als nur ein{" "}
              <span className="italic">Autohaus</span>
            </h2>
            <div className="w-20 h-1 bg-terracotta" />
          </motion.div>

          {/* Right column - text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-foreground/70 text-lg leading-relaxed"
          >
            <p>
              Seit 2013 sind wir in Achern für Sie da. Was als kleiner Familienbetrieb 
              begann, ist heute eine feste Größe, wenn es um gute Gebrauchtwagen geht.
            </p>
            <p>
              Bei uns steht der Mensch im Mittelpunkt – nicht der schnelle Verkauf. 
              Wir nehmen uns Zeit für Sie, beraten ehrlich und finden gemeinsam das 
              Auto, das wirklich zu Ihnen passt. Jedes Fahrzeug wird sorgfältig 
              geprüft und kommt mit allen Unterlagen zu Ihnen.
            </p>
            <p className="text-foreground font-medium">
              Schauen Sie vorbei – wir freuen uns auf Sie!
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border"
        >
          {[
            { number: "10+", label: "Jahre dabei" },
            { number: "500+", label: "Zufriedene Kunden" },
            { number: "100%", label: "Ehrlichkeit" },
            { number: "1", label: "Leidenschaft" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-4xl md:text-5xl text-terracotta mb-2">
                {stat.number}
              </p>
              <p className="text-foreground/60 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
