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
              Your trusted partner for quality pre-owned vehicles in Achern since 1995.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-white/50 text-sm">
              {["Home", "About", "Services", "Location", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-terracotta transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-4">
              Contact
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
                Mon – Sat: 10:00 – 18:00<br />
                Sunday: Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Imprint */}
        <div className="text-white/40 text-xs space-y-2 mb-8">
          <p className="text-white/60 font-medium">Impressum / Imprint</p>
          <p>
            FabriCarZentrum UG · c/o Schulze & Braun GmbH · Vogelsang 4, 77855 Achern, Germany
          </p>
          <p>
            Phone: +49 157 84227058 · Email: info@fabri-cars.net
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
          <p>© {currentYear} FabriCarZentrum UG. All rights reserved.</p>
          <p>Quality cars, honest deals.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
