export default function PricingTeaser() {
  const plans = [
    {
      name: "STARTER",
      price: "$99",
      description: "Perfect for small gyms",
      features: ["Up to 500 members", "Basic analytics", "Mobile app"],
      accent: "cyan",
    },
    {
      name: "PROFESSIONAL",
      price: "$299",
      description: "Most popular",
      features: ["Up to 2,000 members", "Advanced analytics", "Trainer management", "API access"],
      accent: "gold",
      highlighted: true,
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      description: "For large operations",
      features: ["Unlimited members", "White-label options", "Dedicated support", "Custom integration"],
      accent: "cyan",
    },
  ]

  return (
    <section className="gym-container py-24" style={{ borderBottom: "1px solid var(--gym-medium-gray)" }}>
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">PRICING</h2>
        <p className="text-lg" style={{ color: "var(--gym-muted-foreground)" }}>
          Simple, transparent pricing. No surprises.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="p-8 transition-all"
            style={{
              border: `1px solid ${plan.highlighted ? "var(--gym-accent-gold)" : "var(--gym-medium-gray)"}`,
              backgroundColor: plan.highlighted ? "rgba(26, 26, 26, 0.5)" : "rgba(26, 26, 26, 0.2)",
            }}
          >
            <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{plan.name}</h3>
            <p className="text-sm mb-6" style={{ color: "var(--gym-muted-foreground)" }}>
              {plan.description}
            </p>

            <div
              className="text-4xl font-bold mb-8"
              style={{
                color: plan.accent === "gold" ? "var(--gym-accent-gold)" : "var(--gym-accent-cyan)",
              }}
            >
              {plan.price}
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    style={{
                      marginTop: "4px",
                      color: plan.accent === "gold" ? "var(--gym-accent-gold)" : "var(--gym-accent-cyan)",
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "var(--gym-muted-foreground)" }}>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className="w-full py-3 font-bold uppercase tracking-wide transition-colors"
              style={{
                backgroundColor: plan.highlighted ? "var(--gym-accent-gold)" : "transparent",
                color: plan.highlighted
                  ? "var(--gym-black)"
                  : plan.accent === "gold"
                    ? "var(--gym-accent-gold)"
                    : "var(--gym-accent-cyan)",
                border: plan.highlighted
                  ? "none"
                  : `1px solid ${plan.accent === "gold" ? "var(--gym-accent-gold)" : "var(--gym-accent-cyan)"}`,
              }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
