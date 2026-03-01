import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal py-16">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Logo & tagline */}
          <div>
            <Link to="/" className="mb-4 block">
              <img src={logo} alt="FabriCarZentrum Logo" className="h-10" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Ihr Autohaus in Achern – persönlich, fair und mit Leidenschaft für gute Autos. Seit 2013.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-white/50 text-sm">
              {[
                { id: "home", label: "Start" },
                { id: "about", label: "Über uns" },
                { id: "services", label: "Leistungen" },
                { id: "location", label: "Anfahrt" },
                { id: "contact", label: "Kontakt" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-terracotta transition-colors text-left"
                  >
                    {link.label}
                  </button>
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
                <span>Telefon: Nur auf Anfrage</span>
              </li>
              <li>
                <a href="mailto:kontakt@fabri-cars.net" className="hover:text-terracotta transition-colors">
                  kontakt@fabri-cars.net
                </a>
              </li>
              <li className="pt-2">
                Mo – Sa: 10:00 – 18:00<br />
                Sonntag: Geschlossen
              </li>
            </ul>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap gap-6 mb-8 text-white/40 text-sm">
          <Link to="/impressum" className="hover:text-terracotta transition-colors">
            Impressum
          </Link>
          <Link to="/datenschutz" className="hover:text-terracotta transition-colors">
            Datenschutz
          </Link>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
          <p>© {currentYear} FabriCarZentrum UG. Alle Rechte vorbehalten.</p>
          <p>Mit Leidenschaft für Automobile.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
