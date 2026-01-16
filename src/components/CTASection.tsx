import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Instagram } from "lucide-react";

const CTASection = () => {
  return (
    <section
      id="contato"
      className="section-padding bg-gradient-to-br from-primary via-primary to-green-dark text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-subtle" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: "1s" }} />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-semibold mb-6">
            Vamos Conversar
          </span>
          
          <h2 className="heading-2 mb-6">
            Pronto para vender suco com a sua marca?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como o Suco Nugrau pode fazer parte do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open("https://wa.me/5589999263471", "_blank")}
            >
              <MessageCircle className="mr-2" />
              Falar com o Suco Nugrau
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => window.open("https://www.instagram.com/suconugrau/?utm_source=ig_web_button_share_sheet", "_blank")}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 group"
            >
              <Instagram className="mr-2 group-hover:scale-110 transition-transform duration-200" />
              Acesse nosso Instagram
            </Button>
          </div>

          <p className="text-primary-foreground/70 text-sm mt-8">
            Respondemos em até 24 horas
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
