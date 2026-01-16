import logoNugrau from "@/assets/logo-nugrau.png";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B4D3E] backdrop-blur-md border-b border-[#1B4D3E]/80 shadow-lg">
      <div className="section-container">
        <div className="relative flex items-center h-20 md:h-24">
          <button
            onClick={scrollToTop}
            className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-200"
            aria-label="Voltar ao início"
          >
            <img
              src={logoNugrau}
              alt="Suco Nugrau"
              style={{ width: '5cm', height: 'auto' }}
              className="object-contain"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8 h-full absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-white/90 hover:text-white transition-all font-medium px-4 py-2 rounded-lg hover:bg-[#2d6b57]"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("modelos")}
              className="text-white/90 hover:text-white transition-all font-medium px-4 py-2 rounded-lg hover:bg-[#2d6b57]"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("calculadora")}
              className="text-white/90 hover:text-white transition-all font-medium px-4 py-2 rounded-lg hover:bg-[#2d6b57]"
            >
              Simulador
            </button>
          </nav>

          <div className="flex items-center ml-auto gap-4">
            <a
              href="https://www.instagram.com/suconugrau/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors p-2 rounded-lg hover:bg-[#2d6b57] group"
              aria-label="Acesse nosso Instagram"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contato")}
              className="animate-pulse animate-zoom hover:animate-none"
            >
              Seja Parceiro
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
