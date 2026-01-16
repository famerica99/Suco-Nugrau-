import { Leaf, Clock, Sparkles, Apple } from "lucide-react";

const features = [
  {
    icon: Apple,
    title: "Fruta de verdade",
    description: "Produzido com frutas frescas e selecionadas",
  },
  {
    icon: Sparkles,
    title: "Açúcar livre",
    description: "Com adição de açúcar para o sabor ideal",
  },
  {
    icon: Leaf,
    title: "Sem conservantes",
    description: "100% natural, sem aditivos químicos",
  },
  {
    icon: Clock,
    title: "Validade de 3 dias",
    description: "Frescor garantido em cada garrafa",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Sobre o Produto
          </span>
          <h2 className="heading-2 text-foreground mb-6">
            Um suco simples, natural e honesto
          </h2>
          <p className="text-body text-muted-foreground">
            O Suco Nugrau é produzido com ingredientes reais, sem atalhos. Cada garrafa é feita sob demanda para garantir o máximo frescor e qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-accent cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <feature.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-white transition-colors">{feature.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
