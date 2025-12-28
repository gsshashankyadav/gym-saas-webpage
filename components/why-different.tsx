export default function WhyDifferent() {
  const reasons = [
    {
      title: "Built for Gyms, Not Offices",
      description: "Every feature designed specifically for fitness operations.",
    },
    {
      title: "Performance-First UI",
      description: "Sub-second response times. No lag. No excuses.",
    },
    {
      title: "WhatsApp-Native Mindset",
      description: "Communication and notifications where your members already are.",
    },
    {
      title: "Fast Onboarding",
      description: "Live in production within 48 hours. Zero data migration stress.",
    },
  ]

  return (
    <section className="gym-container py-24" style={{ borderBottom: "1px solid var(--gym-medium-gray)" }}>
      <h2
        className="text-5xl md:text-6xl font-bold mb-16 pb-12"
        style={{ borderBottom: "1px solid var(--gym-medium-gray)" }}
      >
        WHY PEAK
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="p-8 group transition-colors"
            style={{
              border: "1px solid var(--gym-medium-gray)",
              backgroundColor: "rgba(26, 26, 26, 0.2)",
            }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: "inherit" }}>
              {reason.title}
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: "var(--gym-muted-foreground)" }}>
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
