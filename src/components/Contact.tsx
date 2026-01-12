import { Phone, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-sand">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
              Kontakt
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Lust auf ein <span className="italic">neues Auto?</span>
            </h2>
            <p className="text-foreground/60 text-lg mb-12">
              Ob Sie schon wissen, was Sie suchen, oder einfach mal schauen wollen – 
              melden Sie sich gerne. Wir sind für Sie da.
            </p>
          </motion.div>

          {/* Contact options */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-8 mb-12"
          >
            <a
              href="tel:+4915784227058"
              className="group p-8 bg-white hover:bg-charcoal transition-colors"
            >
              <Phone className="w-8 h-8 text-terracotta mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm uppercase tracking-wide text-foreground/50 group-hover:text-white/50 mb-2 transition-colors">
                Anrufen
              </p>
              <p className="font-display text-xl group-hover:text-white transition-colors">
                +49 157 84227058
              </p>
            </a>

            <a
              href="mailto:info@fabri-cars.net"
              className="group p-8 bg-white hover:bg-charcoal transition-colors"
            >
              <Mail className="w-8 h-8 text-terracotta mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm uppercase tracking-wide text-foreground/50 group-hover:text-white/50 mb-2 transition-colors">
                E-Mail schreiben
              </p>
              <p className="font-display text-xl group-hover:text-white transition-colors">
                info@fabri-cars.net
              </p>
            </a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-foreground/40 text-sm"
          >
            Wir melden uns meistens noch am selben Tag
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
