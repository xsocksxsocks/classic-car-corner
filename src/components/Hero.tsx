import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl">
          <p className="font-display text-gold text-xl md:text-2xl tracking-[0.3em] mb-4 animate-fade-in">
            SINCE 1995
          </p>
          <h1 className="font-display text-primary-foreground text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            QUALITY CARS<br />
            <span className="text-gold">FAIR PRICES</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Your trusted partner for quality pre-owned vehicles in Achern, Germany. 
            No-nonsense deals, honest service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button 
              onClick={() => scrollToSection("cars")}
              className="bg-gold hover:bg-gold-dark text-navy font-display text-xl tracking-wider px-8 py-4 transition-colors retro-shadow-gold"
            >
              VIEW OUR CARS
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-navy font-display text-xl tracking-wider px-8 py-4 transition-colors"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
