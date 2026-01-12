import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Zurück zur Startseite
          </Link>

          <h1 className="font-display text-4xl md:text-5xl mb-8">Impressum</h1>

          <div className="prose prose-lg max-w-none text-foreground/70 space-y-8">
            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                FabriCarZentrum UG (haftungsbeschränkt)<br />
                c/o Schulze & Braun GmbH<br />
                Vogelsang 4<br />
                77855 Achern<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Kontakt</h2>
              <p>
                Telefon: +49 157 84227058<br />
                E-Mail: info@fabri-cars.net
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Vertretungsberechtigter Geschäftsführer</h2>
              <p>
                Die Vertretungsberechtigung ergibt sich aus dem Handelsregistereintrag.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Mannheim<br />
                (Registernummer auf Anfrage)
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                (Auf Anfrage)
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-terracotta hover:text-terracotta-dark ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
