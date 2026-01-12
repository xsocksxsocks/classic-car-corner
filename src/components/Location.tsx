import { MapPin, Clock, Navigation } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-24 md:py-32 bg-warm-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
            Visit Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            Find Our <span className="italic">Showroom</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Map */}
          <div className="lg:col-span-3 h-[400px] lg:h-[500px] bg-muted overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.5!2d8.0744!3d48.6278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4793e0c6a3c3c3c3%3A0x0!2sVogelsang%204%2C%2077855%20Achern%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FabriCarZentrum Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl mb-2">Address</h3>
                <p className="text-foreground/60 leading-relaxed">
                  FabriCarZentrum UG<br />
                  c/o Schulze & Braun GmbH<br />
                  Vogelsang 4<br />
                  77855 Achern, Germany
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl mb-2">Opening Hours</h3>
                <div className="text-foreground/60 space-y-1">
                  <p className="flex justify-between max-w-[200px]">
                    <span>Mon – Sat</span>
                    <span>10:00 – 18:00</span>
                  </p>
                  <p className="flex justify-between max-w-[200px]">
                    <span>Sunday</span>
                    <span className="text-terracotta">Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Directions button */}
            <a
              href="https://www.google.com/maps/dir//Vogelsang+4,+77855+Achern,+Germany"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-white font-medium px-6 py-3 transition-colors text-sm tracking-wide uppercase w-fit"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
