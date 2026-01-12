import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="font-display text-2xl md:text-3xl tracking-tight">
            Fabri<span className="text-terracotta">Car</span>Zentrum
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
            {[
              { id: "home", label: "Start" },
              { id: "about", label: "Über Uns" },
              { id: "services", label: "Leistungen" },
              { id: "location", label: "Standort" },
              { id: "contact", label: "Kontakt" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover-line text-foreground/70 hover:text-foreground transition-colors uppercase"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Phone CTA */}
          <a
            href="tel:+4915784227058"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors"
          >
            <Phone size={16} />
            <span>+49 157 84227058</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border py-6 px-6">
            <ul className="flex flex-col gap-4 font-body text-sm">
              {[
                { id: "home", label: "Start" },
                { id: "about", label: "Über Uns" },
                { id: "services", label: "Leistungen" },
                { id: "location", label: "Standort" },
                { id: "contact", label: "Kontakt" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground/70 hover:text-foreground transition-colors uppercase w-full text-left py-2"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href="tel:+4915784227058"
              className="flex items-center gap-2 mt-6 pt-4 border-t border-border text-sm font-medium text-terracotta"
            >
              <Phone size={16} />
              <span>+49 157 84227058</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
