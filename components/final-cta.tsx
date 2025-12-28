export default function FinalCTA() {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, var(--gym-black), var(--gym-dark-gray))",
        borderTop: "1px solid var(--gym-medium-gray)",
      }}
    >
      <div className="gym-container text-center space-y-8">
        <h2 className="text-6xl md:text-7xl font-bold leading-tight">
          Ready to
          <br />
          <span style={{ color: "var(--gym-accent-gold)" }}>DOMINATE</span>
          <br />
          your market?
        </h2>

        <p className="text-xl max-w-2xl mx-auto" style={{ color: "var(--gym-muted-foreground)" }}>
          Join 500+ gym owners already using PEAK. Start your free trial today—no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="gym-btn-primary">Start Free Trial</button>
          <button className="gym-btn-secondary">Book a Demo</button>
        </div>

        <p className="text-sm pt-8" style={{ color: "var(--gym-muted-foreground)" }}>
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}
