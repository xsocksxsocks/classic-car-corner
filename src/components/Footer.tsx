const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-16">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Logo & tagline */}
          <div>
            <div className="font-display text-2xl text-white mb-4">
              Fabri<span className="text-terracotta">Car</span>Zentrum
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Ihr vertrauenswürdiger Partner für hochwertige Gebrauchtwagen in Achern seit 2013.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-4">
              Schnellzugriff
            </h4>
            <ul className="space-y-2 text-white/50 text-sm">
              {[
                { id: "home", label: "Start" },
                { id: "about", label: "Über Uns" },
                { id: "services", label: "Leistungen" },
                { id: "location", label: "Standort" },
                { id: "contact", label: "Kontakt" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-terracotta transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>
                <a href="tel:+4915784227058" className="hover:text-terracotta transition-colors">
                  +49 157 84227058
                </a>
              </li>
              <li>
                <a href="mailto:info@fabri-cars.net" className="hover:text-terracotta transition-colors">
                  info@fabri-cars.net
                </a>
              </li>
              <li className="pt-2">
                Mo – Sa: 10:00 – 18:00<br />
                Sonntag: Geschlossen
              </li>
            </ul>
          </div>
        </div>

        {/* Imprint */}
        <div className="text-white/40 text-xs space-y-2 mb-8">
          <p className="text-white/60 font-medium">Impressum</p>
          <p>
            FabriCarZentrum UG · c/o Schulze & Braun GmbH · Vogelsang 4, 77855 Achern, Deutschland
          </p>
          <p>
            Telefon: +49 157 84227058 · E-Mail: info@fabri-cars.net
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
          <p>© {currentYear} FabriCarZentrum UG. Alle Rechte vorbehalten.</p>
          <p>Qualitätsautos, ehrliche Angebote.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
