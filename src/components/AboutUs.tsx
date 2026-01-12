import { Shield, Users, ThumbsUp, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "TRUSTED QUALITY",
    description: "Every vehicle thoroughly inspected before sale",
  },
  {
    icon: Users,
    title: "FAMILY OWNED",
    description: "Personal service from real car enthusiasts",
  },
  {
    icon: ThumbsUp,
    title: "FAIR DEALS",
    description: "No hidden fees, transparent pricing always",
  },
  {
    icon: Clock,
    title: "30+ YEARS",
    description: "Serving the community since 1995",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-display text-gold text-lg tracking-[0.3em] mb-2">WHO WE ARE</p>
          <h2 className="font-display text-foreground text-4xl md:text-6xl">
            ABOUT <span className="text-gold">FABRICARZENTRUM</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-navy p-8 retro-shadow-gold">
              <p className="text-primary-foreground text-lg leading-relaxed mb-6">
                At FabriCarZentrum, we believe buying a car should be simple, honest, and even enjoyable. 
                For over 30 years, we've been helping families and individuals find their perfect vehicle 
                without the pressure tactics you'll find elsewhere.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                We specialize in quality pre-owned vehicles at fair prices. Every car on our lot has been 
                carefully inspected and comes with complete documentation. We're not just selling cars — 
                we're building relationships that last.
              </p>
              <p className="text-gold font-display text-xl tracking-wider">
                "A HANDSHAKE STILL MEANS SOMETHING HERE"
              </p>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-6 border-2 border-navy hover:border-gold transition-colors group"
              >
                <feature.icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-foreground text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
