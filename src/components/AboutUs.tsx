const AboutUs = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - headline */}
          <div>
            <p className="text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              More Than Just a{" "}
              <span className="italic">Car Dealer</span>
            </h2>
            <div className="w-20 h-1 bg-terracotta" />
          </div>

          {/* Right column - text */}
          <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
            <p>
              For over 30 years, FabriCarZentrum has been a cornerstone of the Achern 
              automotive community. What started as a small family business has grown 
              into a trusted destination for quality pre-owned vehicles.
            </p>
            <p>
              We believe buying a car should be straightforward. That's why we focus 
              on transparency, fair pricing, and building lasting relationships with 
              our customers. Every vehicle we sell is thoroughly inspected and comes 
              with complete documentation.
            </p>
            <p className="text-foreground font-medium">
              Come visit us—we'd love to help you find your next car.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border">
          {[
            { number: "30+", label: "Years Experience" },
            { number: "2000+", label: "Cars Sold" },
            { number: "100%", label: "Transparency" },
            { number: "1", label: "Happy Community" },
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
