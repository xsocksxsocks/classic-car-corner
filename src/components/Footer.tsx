const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          {/* Logo */}
          <div>
            <div className="font-display text-2xl md:text-3xl tracking-wide text-background">
              <span className="text-gold">FABRI</span>CAR<span className="text-gold">ZENTRUM</span>
            </div>
            <p className="text-background/60 mt-2">Quality cars, fair prices since 1995</p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-6 md:justify-end font-display text-sm tracking-wider">
            <a href="#home" className="text-background/60 hover:text-gold transition-colors">HOME</a>
            <a href="#about" className="text-background/60 hover:text-gold transition-colors">ABOUT</a>
            <a href="#cars" className="text-background/60 hover:text-gold transition-colors">CARS</a>
            <a href="#location" className="text-background/60 hover:text-gold transition-colors">LOCATION</a>
            <a href="#contact" className="text-background/60 hover:text-gold transition-colors">CONTACT</a>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          {/* Imprint */}
          <div className="text-background/50 text-sm space-y-1 mb-6">
            <p className="font-semibold text-background/70">Imprint / Impressum</p>
            <p>FabriCarZentrum UG</p>
            <p>c/o Schulze & Braun GmbH</p>
            <p>Vogelsang 4, 77855 Achern, Germany</p>
            <p>Phone: +49 157 84227058</p>
            <p>Email: info@fabri-cars.net</p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/40 text-sm">
              © {new Date().getFullYear()} FabriCarZentrum UG. All rights reserved.
            </p>
            <p className="text-background/40 text-sm">
              Made with passion for automobiles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
