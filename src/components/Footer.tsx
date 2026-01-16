import logoNugrau from "@/assets/logo-nugrau.png";
import { Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <button
              onClick={scrollToTop}
              className="cursor-pointer hover:scale-105 transition-transform duration-200"
              aria-label="Voltar ao início"
            >
              <img
                src={logoNugrau}
                alt="Suco Nugrau"
                className="h-[5cm] w-auto brightness-0 invert"
              />
            </button>
            <a
              href="https://www.instagram.com/suconugrau/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors group"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Acesse nosso Instagram</span>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 Suco Nugrau. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              Suco natural, feito com fruta de verdade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
