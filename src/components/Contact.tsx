import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-sand">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <p className="text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to Find Your <span className="italic">Next Car?</span>
          </h2>
          <p className="text-foreground/60 text-lg mb-12">
            Whether you have questions or just want to browse, we're always happy to help. 
            Give us a call or send an email.
          </p>

          {/* Contact options */}
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <a
              href="tel:+4915784227058"
              className="group p-8 bg-white hover:bg-charcoal transition-colors"
            >
              <Phone className="w-8 h-8 text-terracotta mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm uppercase tracking-wide text-foreground/50 group-hover:text-white/50 mb-2 transition-colors">
                Call Us
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
                Email Us
              </p>
              <p className="font-display text-xl group-hover:text-white transition-colors">
                info@fabri-cars.net
              </p>
            </a>
          </div>

          <p className="text-foreground/40 text-sm">
            We typically respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
