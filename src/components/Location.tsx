import { MapPin, Navigation } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-display text-gold text-lg tracking-[0.3em] mb-2">FIND US</p>
          <h2 className="font-display text-foreground text-4xl md:text-6xl">
            OUR <span className="text-gold">LOCATION</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="h-[400px] lg:h-[500px] border-4 border-navy retro-shadow overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.5!2d8.0744!3d48.6278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4793e0c6a3c3c3c3%3A0x0!2sVogelsang%204%2C%2077855%20Achern%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FabriCarZentrum Location"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="bg-navy p-8 retro-shadow-gold">
              <div className="flex items-start gap-4 mb-8">
                <MapPin className="text-gold w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-primary-foreground text-2xl mb-2">ADDRESS</h3>
                  <p className="text-primary-foreground/80 text-lg leading-relaxed">
                    FabriCarZentrum UG<br />
                    c/o Schulze & Braun GmbH<br />
                    Vogelsang 4<br />
                    77855 Achern, Germany
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <Navigation className="text-gold w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-primary-foreground text-2xl mb-2">DIRECTIONS</h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Conveniently located in Achern, we're easily accessible from the A5 motorway. 
                    Free parking available on-site for all visitors.
                  </p>
                </div>
              </div>

              <a 
                href="https://www.google.com/maps/dir//Vogelsang+4,+77855+Achern,+Germany"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-display text-lg tracking-wider px-6 py-3 transition-colors"
              >
                <Navigation size={18} />
                GET DIRECTIONS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
