import { Store, PartyPopper, Sparkles, UtensilsCrossed } from "lucide-react";

const audiences = [
  {
    icon: Store,
    title: "Lanchonetes",
    description: "Ofereça um produto natural e diferenciado aos seus clientes",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes Delivery",
    description: "Ideal para marmitarias e restaurantes de quentinhas que trabalham com alto volume e delivery diário",
  },
  {
    icon: PartyPopper,
    title: "Eventos",
    description: "Sucos personalizados para festas e eventos especiais",
  },
  {
    icon: Sparkles,
    title: "Negócios Diferentes",
    description: "Para quem quer sair do comum e oferecer algo especial",
  },
];

const AudienceSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Para Quem
          </span>
          <h2 className="heading-2 text-foreground mb-6">
            Para quem é o Suco Nugrau?
          </h2>
          <p className="text-body text-muted-foreground">
            Se você está em um desses segmentos, temos uma oportunidade para você
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-card hover:bg-secondary/5 border border-border hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <audience.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
