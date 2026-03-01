import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
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

          <h1 className="font-display text-4xl md:text-5xl mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none text-foreground/70 space-y-8">
            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="font-display text-xl text-foreground mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">2. Verantwortliche Stelle</h2>
              <p>
                FabriCarZentrum UG (haftungsbeschränkt)<br />
                c/o Schulze & Braun GmbH<br />
                Vogelsang 4<br />
                77855 Achern<br />
                Deutschland
              </p>
              <p className="mt-4">
                Telefon: Nur auf Anfrage<br />
                E-Mail: kontakt@fabri-cars.net
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">3. Datenerfassung auf dieser Website</h2>
              <h3 className="font-display text-xl text-foreground mb-2">Wer ist für die Datenerfassung verantwortlich?</h3>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Die Kontaktdaten finden Sie im Impressum dieser Website.
              </p>

              <h3 className="font-display text-xl text-foreground mb-2 mt-6">Wie erfassen wir Ihre Daten?</h3>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                Hierbei kann es sich z.B. um Daten handeln, die Sie uns per E-Mail oder Telefon mitteilen.
              </p>
              <p className="mt-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, 
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <h3 className="font-display text-xl text-foreground mb-2 mt-6">Wofür nutzen wir Ihre Daten?</h3>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">4. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
              <p className="mt-4">
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese 
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>
              <p className="mt-4">
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">5. Hosting</h2>
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
                Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei 
                kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
                Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über 
                eine Website generiert werden, handeln.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">6. Google Maps</h2>
              <p>
                Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die 
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="mt-4">
                Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu 
                speichern. Diese Informationen werden in der Regel an einen Server von Google in 
                den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen 
                Einfluss auf diese Datenübertragung.
              </p>
              <p className="mt-4">
                Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung 
                unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der 
                Website angegebenen Orte.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">7. Kontaktaufnahme</h2>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller 
                daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung 
                Ihres Anliegens bei uns gespeichert und verarbeitet.
              </p>
              <p className="mt-4">
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser 
                Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit 
                der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher 
                Maßnahmen erforderlich ist.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
