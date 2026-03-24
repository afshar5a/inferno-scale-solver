import { GitCompare, TrendingDown, Target } from "lucide-react";

const cards = [
  {
    icon: GitCompare,
    title: "Compare Architectures",
    description: "Evaluate cost and throughput trade-offs across different AI system designs side by side.",
  },
  {
    icon: TrendingDown,
    title: "Stress-Test Margins",
    description: "See how prompt growth, retrieval depth, and usage patterns erode or protect your unit economics.",
  },
  {
    icon: Target,
    title: "Decide Before Scaling",
    description: "Find break-even thresholds and identify which architecture sustains profitability at scale.",
  },
];

const ValueCards = () => (
  <section id="what-it-does" className="py-20 px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-lg border border-border bg-card p-8 hover:shadow-sm transition-shadow"
          >
            <card.icon size={24} className="text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-xl mb-2 text-card-foreground">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueCards;
