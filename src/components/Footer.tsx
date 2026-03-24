const Footer = () => (
  <footer id="contact" className="py-16 px-6 border-t border-border">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
        Discuss a scenario or share feedback
      </h2>
      <p className="text-muted-foreground mb-6">
        Have a use case you'd like to model, or thoughts on the approach? Reach out.
      </p>
      <a
        href="mailto:hello@inferonomics.ai"
        className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
      >
        Get in Touch
      </a>
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Inferonomics. An independent research initiative.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
