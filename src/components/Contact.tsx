import { Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-display text-gold text-lg tracking-[0.3em] mb-2">GET IN TOUCH</p>
          <h2 className="font-display text-primary-foreground text-4xl md:text-6xl">
            CONTACT <span className="text-gold">US</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Phone */}
          <div className="text-center p-8 border-2 border-navy-light hover:border-gold transition-colors group">
            <Phone className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-primary-foreground text-xl mb-2">CALL US</h3>
            <a 
              href="tel:+4915784227058" 
              className="text-primary-foreground/80 hover:text-gold transition-colors text-lg"
            >
              +49 157 84227058
            </a>
          </div>

          {/* Email */}
          <div className="text-center p-8 border-2 border-navy-light hover:border-gold transition-colors group">
            <Mail className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-primary-foreground text-xl mb-2">EMAIL US</h3>
            <a 
              href="mailto:info@fabri-cars.net" 
              className="text-primary-foreground/80 hover:text-gold transition-colors text-lg"
            >
              info@fabri-cars.net
            </a>
          </div>

          {/* Hours */}
          <div className="text-center p-8 border-2 border-navy-light hover:border-gold transition-colors group">
            <Clock className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-primary-foreground text-xl mb-2">OPENING HOURS</h3>
            <div className="text-primary-foreground/80">
              <p>Mon - Sat: 10:00 - 18:00</p>
              <p className="text-rust">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-primary-foreground/60 mb-4">Ready to find your next car?</p>
          <a 
            href="tel:+4915784227058"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-display text-xl tracking-wider px-8 py-4 transition-colors retro-shadow-gold"
          >
            GIVE US A CALL TODAY
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
