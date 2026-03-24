const About = () => (
  <section id="about" className="py-20 px-6 bg-muted/50">
    <div className="container mx-auto max-w-3xl">
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 text-center">
        About this project
      </h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-center">
        <p>
          Inferonomics is an independent modeling initiative exploring the economics of AI system architecture. It provides tools and frameworks for reasoning about cost, margin, and viability before committing to production-scale infrastructure.
        </p>
        <p>
          The project was built as personal research and experimentation — developed entirely outside any professional responsibilities. No confidential or employer data was used in its creation.
        </p>
        <p className="text-sm border-t border-border pt-5 text-muted-foreground/80">
          This is a research tool, not a commercial product. Models are simplified representations and should inform — not replace — thorough analysis and experimentation.
        </p>
      </div>
    </div>
  </section>
);

export default About;
