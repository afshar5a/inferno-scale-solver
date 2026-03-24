import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this a cost calculator?",
    a: "Not exactly. A calculator gives you a number. Inferonomics models how costs behave under changing conditions — volume, prompt growth, retrieval depth, caching rates — so you can understand dynamics, not just totals.",
  },
  {
    q: "Does it replace experimentation?",
    a: "No. It complements experimentation by helping you decide which experiments are worth running. Model the economics first, then validate with real data.",
  },
  {
    q: "Who is this for?",
    a: "Technical leaders, platform teams, and practitioners who need to evaluate AI architecture choices against economic constraints — not just functional requirements.",
  },
  {
    q: "What assumptions matter most?",
    a: "Token volume, prompt length distributions, caching hit-rates, and model pricing are typically the highest-leverage inputs. The simulator lets you test sensitivity across all of them.",
  },
  {
    q: "Is this affiliated with any company?",
    a: "No. Inferonomics is an independent research and modeling initiative, built as personal research and experimentation. It was developed outside any professional responsibilities and uses no confidential or employer data.",
  },
];

const FAQ = () => (
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-3xl">
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10 text-center">
        Frequently asked questions
      </h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
