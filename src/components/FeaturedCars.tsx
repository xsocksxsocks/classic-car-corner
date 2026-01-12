import { Car, Gauge, Calendar, Fuel } from "lucide-react";

const cars = [
  {
    name: "Volkswagen Golf VII",
    year: "2019",
    mileage: "45,000 km",
    fuel: "Diesel",
    price: "€15,900",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop",
  },
  {
    name: "BMW 3 Series",
    year: "2018",
    mileage: "62,000 km",
    fuel: "Petrol",
    price: "€22,500",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
  },
  {
    name: "Mercedes C-Class",
    year: "2020",
    mileage: "38,000 km",
    fuel: "Diesel",
    price: "€28,900",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
  },
  {
    name: "Audi A4 Avant",
    year: "2017",
    mileage: "78,000 km",
    fuel: "Diesel",
    price: "€18,500",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
  },
];

const FeaturedCars = () => {
  return (
    <section id="cars" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-display text-gold text-lg tracking-[0.3em] mb-2">OUR INVENTORY</p>
          <h2 className="font-display text-foreground text-4xl md:text-6xl">
            FEATURED <span className="text-gold">VEHICLES</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Browse our selection of quality pre-owned vehicles. Visit us in person to see our full inventory.
          </p>
        </div>

        {/* Cars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, index) => (
            <div 
              key={index}
              className="bg-card border-2 border-border hover:border-gold transition-all group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gold text-navy font-display text-lg px-3 py-1">
                  {car.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-foreground text-xl mb-4">{car.name}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-gold" />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge size={14} className="text-gold" />
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Fuel size={14} className="text-gold" />
                    <span>{car.fuel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-navy text-primary-foreground px-6 py-3 retro-shadow-gold">
            <Car className="text-gold" />
            <span className="font-display text-lg tracking-wider">
              VISIT US TO SEE OUR FULL INVENTORY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
