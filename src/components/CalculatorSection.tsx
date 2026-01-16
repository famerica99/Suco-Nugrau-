import { useState, useEffect } from "react";
import { Calculator, TrendingUp, Calendar, CalendarDays } from "lucide-react";

const COST_CONVENIO = 4.0;
const COST_IDENTIDADE = 3.8;

const CalculatorSection = () => {
  const [dailySales, setDailySales] = useState(20);
  const [selectedModel, setSelectedModel] = useState<"convenio" | "identidade">("convenio");
  const [suggestedPrice, setSuggestedPrice] = useState(5.0);
  const [dailyProfit, setDailyProfit] = useState(0);
  const [weeklyProfit, setWeeklyProfit] = useState(0);
  const [monthlyProfit, setMonthlyProfit] = useState(0);

  const costPerUnit = selectedModel === "convenio" ? COST_CONVENIO : COST_IDENTIDADE;
  const profitPerUnit = suggestedPrice - costPerUnit;

  useEffect(() => {
    const daily = dailySales * profitPerUnit;
    const weekly = daily * 6; // 6 dias
    const monthly = daily * 26; // 26 dias
    setDailyProfit(daily);
    setWeeklyProfit(weekly);
    setMonthlyProfit(monthly);
  }, [dailySales, profitPerUnit]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <section id="calculadora" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Simulador de Lucro
          </span>
          <h2 className="heading-2 text-foreground mb-6">
            Simule quanto você pode ganhar
          </h2>
          <p className="text-body text-muted-foreground">
            Escolha a quantidade de sucos vendidos por dia e veja uma estimativa de lucro semanal e mensal.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 shadow-lg">
            {/* Model Selection */}
            <div className="mb-8">
              <label className="block text-foreground font-semibold mb-4 text-lg">
                Escolha o modelo de compra:
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedModel("convenio")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedModel === "convenio"
                      ? "border-secondary bg-secondary/10"
                      : "border-border hover:border-secondary/30"
                  }`}
                >
                  <div className="text-sm font-semibold text-muted-foreground mb-1">CONVÊNIO</div>
                  <div className="text-xl font-bold text-foreground">{formatCurrency(COST_CONVENIO)}</div>
                  <div className="text-xs text-muted-foreground mt-1">A partir de 10 unidades</div>
                </button>
                <button
                  onClick={() => setSelectedModel("identidade")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedModel === "identidade"
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-accent/30"
                  }`}
                >
                  <div className="text-sm font-semibold text-muted-foreground mb-1">COM IDENTIDADE</div>
                  <div className="text-xl font-bold text-foreground">{formatCurrency(COST_IDENTIDADE)}</div>
                  <div className="text-xs text-muted-foreground mt-1">A partir de 20 unidades</div>
                </button>
              </div>
            </div>

            {/* Suggested Price Input */}
            <div className="mb-8">
              <label className="block text-foreground font-semibold mb-4 text-lg">
                Valor de venda sugerida (por unidade):
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={suggestedPrice}
                  onChange={(e) => setSuggestedPrice(Number(e.target.value))}
                  className="flex-1 px-4 py-3 bg-background border-2 border-border rounded-xl text-lg font-semibold focus:outline-none focus:border-secondary"
                />
                <div className="text-lg font-semibold text-foreground">
                  {formatCurrency(suggestedPrice)}
                </div>
              </div>
            </div>

            {/* Input Section */}
            <div className="mb-10">
              <label className="block text-foreground font-semibold mb-4 text-lg">
                Quantos sucos você pretende vender por dia?
              </label>
              <div className="flex items-center gap-6">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={dailySales}
                  onChange={(e) => setDailySales(Number(e.target.value))}
                  className="flex-1 h-3 bg-muted rounded-full appearance-none cursor-pointer accent-secondary"
                  style={{
                    background: `linear-gradient(to right, hsl(var(--secondary)) 0%, hsl(var(--secondary)) ${dailySales}%, hsl(var(--muted)) ${dailySales}%, hsl(var(--muted)) 100%)`,
                  }}
                />
                <div className="w-24 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {dailySales}
                  </span>
                </div>
              </div>
            </div>

            {/* Fixed Values Info */}
            <div className="grid grid-cols-3 gap-4 mb-10 p-4 bg-muted/50 rounded-xl">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Custo unitário</p>
                <p className="font-bold text-foreground">{formatCurrency(costPerUnit)}</p>
              </div>
              <div className="text-center border-x border-border">
                <p className="text-sm text-muted-foreground mb-1">Venda sugerida</p>
                <p className="font-bold text-foreground">{formatCurrency(suggestedPrice)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Lucro/unidade</p>
                <p className={`font-bold ${profitPerUnit >= 0 ? 'text-secondary' : 'text-destructive'}`}>
                  {formatCurrency(profitPerUnit)}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-secondary/10 rounded-2xl p-6 text-center border-2 border-secondary/20">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-muted-foreground mb-2">Lucro Diário</p>
                <p className="text-3xl font-bold text-foreground">{formatCurrency(dailyProfit)}</p>
              </div>

              <div className="bg-accent/10 rounded-2xl p-6 text-center border-2 border-accent/20">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <p className="text-muted-foreground mb-2">Lucro Semanal</p>
                <p className="text-3xl font-bold text-foreground">{formatCurrency(weeklyProfit)}</p>
                <p className="text-xs text-muted-foreground mt-1">(6 dias)</p>
              </div>

              <div className="bg-primary/10 rounded-2xl p-6 text-center border-2 border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-bl-xl">
                  DESTAQUE
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CalendarDays className="w-6 h-6 text-primary" />
                </div>
                <p className="text-muted-foreground mb-2">Lucro Mensal</p>
                <p className="text-4xl font-bold text-primary">{formatCurrency(monthlyProfit)}</p>
                <p className="text-xs text-muted-foreground mt-1">(26 dias)</p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-sm text-muted-foreground mt-8">
              * Valores estimados. O lucro pode variar conforme preço final e estratégia do estabelecimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
