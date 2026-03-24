const audiences = [
  { label: "CTOs & Technical Leaders", desc: "Making architecture bets with budget implications." },
  { label: "Product & Platform Teams", desc: "Evaluating AI features against unit economics constraints." },
  { label: "Researchers & Practitioners", desc: "Exploring cost structures across retrieval and generation strategies." },
];

const DesignedFor = () => (
  <section className="py-20 px-6 bg-muted/50">
    <div className="container mx-auto max-w-3xl">
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10 text-center">
        Designed for
      </h2>
      <div className="space-y-4">
        {audiences.map((a) => (
          <div key={a.label} className="flex gap-4 items-start p-5 rounded-lg border border-border bg-card">
            <span className="text-primary font-display text-lg leading-none mt-0.5">—</span>
            <div>
              <h3 className="font-medium text-card-foreground mb-1">{a.label}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DesignedFor;
