const AboutUs = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - headline */}
          <div>
            <p className="text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
              Über Uns
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Mehr als nur ein{" "}
              <span className="italic">Autohändler</span>
            </h2>
            <div className="w-20 h-1 bg-terracotta" />
          </div>

          {/* Right column - text */}
          <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
            <p>
              Seit 2013 ist FabriCarZentrum ein fester Bestandteil der Acherner 
              Automobillandschaft. Was als kleines Familienunternehmen begann, hat sich 
              zu einer vertrauenswürdigen Adresse für hochwertige Gebrauchtwagen entwickelt.
            </p>
            <p>
              Wir glauben, dass der Autokauf unkompliziert sein sollte. Deshalb setzen wir 
              auf Transparenz, faire Preise und den Aufbau langfristiger Kundenbeziehungen. 
              Jedes Fahrzeug, das wir verkaufen, wird gründlich geprüft und kommt mit 
              vollständiger Dokumentation.
            </p>
            <p className="text-foreground font-medium">
              Besuchen Sie uns—wir helfen Ihnen gerne, Ihr nächstes Auto zu finden.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border">
          {[
            { number: "10+", label: "Jahre Erfahrung" },
            { number: "500+", label: "Verkaufte Autos" },
            { number: "100%", label: "Transparenz" },
            { number: "1", label: "Zufriedene Community" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-4xl md:text-5xl text-terracotta mb-2">
                {stat.number}
              </p>
              <p className="text-foreground/60 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
