const decisions = [
  "Should we add a caching layer, and at what hit-rate does it pay for itself?",
  "How does retrieval depth affect per-query cost at 10× current volume?",
  "At what prompt length does our current architecture become margin-negative?",
  "Is a routing layer worth the complexity given our traffic mix?",
  "What break-even utilization rate does each architecture require?",
  "How sensitive is our margin to changes in model pricing?",
];

const DecisionFramework = () => (
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Questions it helps you answer
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The simulator and models are designed around the decisions that matter most when scaling AI systems.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {decisions.map((q, i) => (
          <div
            key={i}
            className="flex gap-3 p-5 rounded-lg border border-border bg-card"
          >
            <span className="text-primary font-display text-lg leading-none mt-0.5">→</span>
            <p className="text-sm text-card-foreground leading-relaxed">{q}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DecisionFramework;
