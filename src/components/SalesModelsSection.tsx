import { Check, X } from "lucide-react";

const SalesModelsSection = () => {
  return (
    <section id="modelos" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Como Funciona
          </span>
          <h2 className="heading-2 text-foreground mb-6">
            Modelos de compra do Suco Nugrau
          </h2>
          <p className="text-body text-muted-foreground">
            Escolha o modelo que melhor se adapta ao seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Convênio */}
          <div className="glass-card p-8 border-2 border-border hover:border-secondary/30 transition-all duration-300">
            <div className="inline-block px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-semibold mb-4">
              CONVÊNIO
            </div>
            <h3 className="heading-3 text-foreground mb-2">Modelo Convênio</h3>
            <p className="text-muted-foreground mb-6">Ideal para começar a vender sem identidade visual</p>

            <div className="text-4xl font-bold text-foreground mb-1">
              R$ 4,00
              <span className="text-lg font-normal text-muted-foreground">/unidade</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">A partir de 10 unidades</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-secondary" />
                </div>
                <span className="text-foreground">Pedido mínimo: 10 unidades</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-secondary" />
                </div>
                <span className="text-foreground">Modelo convênio</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-3 h-3 text-destructive" />
                </div>
                <span className="text-muted-foreground">Não contém logo ou identidade visual</span>
              </div>
            </div>
          </div>

          {/* Com Identidade Visual */}
          <div className="glass-card p-8 border-2 border-accent shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-xs font-bold rounded-bl-xl">
              RECOMENDADO
            </div>

            <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4">
              SUA MARCA
            </div>
            <h3 className="heading-3 text-foreground mb-2">Com Identidade Visual</h3>
            <p className="text-muted-foreground mb-6">Venda suco com a sua marca no rótulo</p>

            <div className="text-4xl font-bold text-foreground mb-1">
              R$ 3,80
              <span className="text-lg font-normal text-muted-foreground">/unidade</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">A partir de 20 unidades</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-secondary" />
                </div>
                <span className="text-foreground">Pedido mínimo: 20 unidades</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-secondary" />
                </div>
                <span className="text-foreground">Contém sua logo e identidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-secondary" />
                </div>
                <span className="text-foreground">Print on demand personalizado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regras importantes */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xs">!</span>
              </span>
              Regras Importantes
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Abaixo de 20 unidades não trabalhamos com logo
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Modelo convênio nunca acompanha logo
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Logo apenas em pedidos acima de 19 unidades
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesModelsSection;
