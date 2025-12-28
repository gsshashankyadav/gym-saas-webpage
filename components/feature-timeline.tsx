export default function FeatureTimeline() {
  const features = [
    {
      number: "01",
      title: "Member Management",
      description:
        "Complete member database with photo ID, membership status, and contact info. Automated renewal reminders.",
      accent: "gold",
    },
    {
      number: "02",
      title: "Attendance Tracking",
      description: "Real-time check-in via app or kiosk. Analytics dashboard showing peak hours and member retention.",
      accent: "cyan",
    },
    {
      number: "03",
      title: "Payments & Billing",
      description: "Automated membership billing, payment processing, and receipt generation. Multi-currency support.",
      accent: "gold",
    },
    {
      number: "04",
      title: "Trainer Management",
      description: "Schedule trainers, track client sessions, manage compensation, and performance metrics.",
      accent: "cyan",
    },
    {
      number: "05",
      title: "Analytics Engine",
      description: "Real-time KPIs: revenue, member growth, attendance trends, peak times, and profitability analysis.",
      accent: "gold",
    },
  ]

  return (
    <section className="gym-container py-24" style={{ borderBottom: "1px solid var(--gym-medium-gray)" }}>
      <div className="mb-16 pb-12" style={{ borderBottom: "1px solid var(--gym-medium-gray)" }}>
        <h2 className="text-5xl md:text-6xl font-bold">FEATURES</h2>
      </div>

      <div className="space-y-16">
        {features.map((feature, i) => (
          <div
            key={i}
            className="grid md:grid-cols-12 gap-8 items-center pb-16"
            style={{ borderBottom: "1px solid var(--gym-dark-gray)" }}
          >
            <div className="md:col-span-2">
              <div
                className="text-6xl font-bold"
                style={{
                  color: feature.accent === "gold" ? "var(--gym-accent-gold)" : "var(--gym-accent-cyan)",
                }}
              >
                {feature.number}
              </div>
            </div>

            <div className="md:col-span-10">
              <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "var(--gym-muted-foreground)" }}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
