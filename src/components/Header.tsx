import { Phone, Mail, Clock } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-navy text-primary-foreground">
      {/* Top bar */}
      <div className="border-b border-navy-light">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+4915784227058" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} />
              <span>+49 157 84227058</span>
            </a>
            <a href="mailto:info@fabri-cars.net" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} />
              <span>info@fabri-cars.net</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-gold">
            <Clock size={14} />
            <span>Mon-Sat: 10:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="font-display text-3xl md:text-4xl tracking-wide">
            <span className="text-gold">FABRI</span>CAR<span className="text-gold">ZENTRUM</span>
          </div>
          <ul className="hidden md:flex items-center gap-8 font-display text-lg tracking-wider">
            <li>
              <button 
                onClick={() => scrollToSection("home")}
                className="hover:text-gold transition-colors"
              >
                HOME
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("about")}
                className="hover:text-gold transition-colors"
              >
                ABOUT US
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("cars")}
                className="hover:text-gold transition-colors"
              >
                OUR CARS
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("location")}
                className="hover:text-gold transition-colors"
              >
                LOCATION
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("contact")}
                className="hover:text-gold transition-colors"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
