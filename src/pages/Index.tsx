import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeaturedCars from "@/components/FeaturedCars";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <FeaturedCars />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
