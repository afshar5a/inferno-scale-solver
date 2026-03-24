const WhyMatters = () => (
  <section className="py-20 px-6 bg-muted/50">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
        Why AI teams get this wrong
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-balance">
        Most teams optimize for model quality and implementation speed — then discover too late that their architecture can't sustain viable unit economics at production scale. Cost modeling is treated as a finance exercise, not an engineering constraint.
      </p>
      <p className="text-foreground font-medium text-balance">
        Inferonomics treats economic viability as an architectural constraint — not an afterthought.
      </p>
    </div>
  </section>
);

export default WhyMatters;
