import { Star, Award, TrendingUp } from "lucide-react";

const BrandSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-semibold mb-6">
              Diferencial
            </span>
            <h2 className="heading-2 mb-6">
              Venda suco com a identidade do seu negócio
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Ao invés de vender o suco com a marca de outra empresa, você passa a vender um produto com a <strong className="text-accent">sua própria marca</strong>, agregando valor, profissionalismo e credibilidade ao seu negócio.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 mb-8">
              <p className="text-2xl font-semibold italic text-primary-foreground">
                "Você não vende só suco. Você vende a sua marca."
              </p>
            </blockquote>

            <p className="text-lg text-primary-foreground/80">
              Mais valor percebido, mais confiança e mais resultado.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Marca Própria</h3>
              <p className="text-primary-foreground/80">
                Sua logo estampada em cada garrafa, fortalecendo a identidade do seu negócio
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Credibilidade</h3>
              <p className="text-primary-foreground/80">
                Produtos personalizados transmitem profissionalismo e confiança ao cliente
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mais Lucro</h3>
              <p className="text-primary-foreground/80">
                Valor percebido maior permite praticar preços mais atrativos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
