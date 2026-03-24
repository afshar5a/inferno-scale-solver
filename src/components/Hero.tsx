import { ArrowDown } from "lucide-react";

const Hero = () => (
  <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
    <div className="container mx-auto max-w-3xl text-center">
      <p className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
        Decision Support for AI System Economics
      </p>
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground text-balance mb-6">
        Model the economic consequences of AI architecture choices before you scale.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
        Understand cost structures, margin sensitivity, and break-even thresholds across RAG, caching, routing, and retrieval strategies — before committing resources.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <a
          href="#simulator"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Open Simulator
        </a>
        <a
          href="#example"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
        >
          See Example Analysis
        </a>
      </div>
      <a
        href="#what-it-does"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to learn more"
      >
        <ArrowDown size={16} />
        What it helps you decide
      </a>
    </div>
  </section>
);

export default Hero;
