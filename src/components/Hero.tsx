import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-charcoal relative overflow-hidden pt-20">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Large decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] text-white/[0.03] whitespace-nowrap pointer-events-none select-none">
        AUTOMOBILE
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-terracotta text-sm md:text-base tracking-[0.4em] uppercase mb-8">
          Seit 2013 · Achern, Deutschland
        </p>

        <h1 className="font-display text-primary-foreground text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 max-w-4xl mx-auto">
          Wo Qualität auf{" "}
          <span className="italic text-terracotta">Vertrauen</span> trifft
        </h1>

        <p className="text-primary-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Ein familiengeführtes Autohaus, das Ihnen hilft, das perfekte Fahrzeug zu finden. 
          Kein Druck, keine Tricks—nur ehrliche Angebote.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+4915784227058"
            className="bg-terracotta hover:bg-terracotta-dark text-white font-medium px-8 py-4 transition-colors text-sm tracking-wide uppercase"
          >
            Jetzt Anrufen
          </a>
          <button
            onClick={scrollToAbout}
            className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-charcoal font-medium px-8 py-4 transition-all text-sm tracking-wide uppercase"
          >
            Mehr Erfahren
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 hover:text-terracotta transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
