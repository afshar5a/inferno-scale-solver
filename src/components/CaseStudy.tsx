const CaseStudy = () => (
  <section id="example" className="py-20 px-6 bg-muted/50">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Example analysis
        </h2>
        <p className="text-muted-foreground text-lg">
          RAG-augmented support workflow — modeled before deployment.
        </p>
      </div>

      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          {/* Assumptions */}
          <div className="p-8">
            <h3 className="font-display text-xl text-card-foreground mb-4">Assumptions</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary">•</span>10,000 support queries per day</li>
              <li className="flex gap-2"><span className="text-primary">•</span>RAG retrieval over 50K document chunks</li>
              <li className="flex gap-2"><span className="text-primary">•</span>Average prompt: 1,200 tokens input, 400 output</li>
              <li className="flex gap-2"><span className="text-primary">•</span>Target margin: 40% on $0.12 per-ticket SLA</li>
              <li className="flex gap-2"><span className="text-primary">•</span>Caching hit-rate assumption: 35%</li>
            </ul>
          </div>

          {/* Outcomes */}
          <div className="p-8">
            <h3 className="font-display text-xl text-card-foreground mb-4">Model Outcomes</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary">•</span>Break-even at 6,200 queries/day without caching</li>
              <li className="flex gap-2"><span className="text-primary">•</span>Caching drops break-even to 4,100 queries/day</li>
              <li className="flex gap-2"><span className="text-primary">•</span>Margin turns negative above 1,800 tokens input</li>
              <li className="flex gap-2"><span className="text-primary">•</span>Routing layer adds 8% cost but enables model tiering</li>
              <li className="flex gap-2"><span className="text-primary">•</span>Retrieval depth beyond top-8 has diminishing returns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudy;
