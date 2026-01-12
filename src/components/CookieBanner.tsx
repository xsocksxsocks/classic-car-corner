import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "cookie-consent";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-charcoal text-white p-6 md:p-8 shadow-2xl relative">
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            aria-label="Schließen"
          >
            <X size={20} />
          </button>

          <div className="pr-8">
            <h3 className="font-display text-xl mb-3">Wir nutzen Cookies</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Diese Website verwendet Google Maps zur Anzeige unseres Standorts. 
              Dabei können Daten an Google übertragen werden. Weitere Informationen 
              finden Sie in unserer{" "}
              <Link 
                to="/datenschutz" 
                className="text-terracotta hover:text-terracotta-dark underline"
              >
                Datenschutzerklärung
              </Link>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptCookies}
                className="bg-terracotta hover:bg-terracotta-dark text-white font-medium px-6 py-3 transition-colors text-sm tracking-wide"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={declineCookies}
                className="border border-white/30 text-white hover:bg-white/10 font-medium px-6 py-3 transition-colors text-sm tracking-wide"
              >
                Nur notwendige
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
