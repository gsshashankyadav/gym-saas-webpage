export default function ProductPreview() {
  return (
    <section className="gym-container py-24" style={{ borderBottom: "1px solid var(--gym-medium-gray)" }}>
      <div className="mb-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">DASHBOARD</h2>
        <p className="text-lg" style={{ color: "var(--gym-muted-foreground)" }}>
          Real-time gym operations at a glance
        </p>
      </div>

      {/* Fake dashboard mock */}
      <div
        className="p-8"
        style={{
          border: "1px solid var(--gym-medium-gray)",
          backgroundColor: "rgba(26, 26, 26, 0.3)",
        }}
      >
        {/* Header bar */}
        <div
          className="flex justify-between items-center mb-8 pb-8"
          style={{ borderBottom: "1px solid var(--gym-medium-gray)" }}
        >
          <div className="text-sm uppercase tracking-widest" style={{ color: "var(--gym-muted-foreground)" }}>
            PEAK ANALYTICS
          </div>
          <div className="flex gap-4">
            <div
              style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--gym-accent-gold)" }}
            />
            <div
              style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--gym-accent-cyan)" }}
            />
            <div
              style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--gym-accent-red)" }}
            />
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Active Members", value: "1,247", accent: "gold" },
            { label: "This Month Revenue", value: "$48.3K", accent: "cyan" },
            { label: "Check-ins Today", value: "423", accent: "gold" },
            { label: "Conversion Rate", value: "47%", accent: "cyan" },
          ].map((kpi, i) => (
            <div
              key={i}
              className="p-6"
              style={{
                border: "1px solid var(--gym-medium-gray)",
                backgroundColor: "rgba(10, 10, 10, 0.5)",
              }}
            >
              <p className="gym-metric-label mb-2">{kpi.label}</p>
              <p
                className="text-3xl font-bold"
                style={{
                  color: kpi.accent === "gold" ? "var(--gym-accent-gold)" : "var(--gym-accent-cyan)",
                }}
              >
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        {/* Chart placeholder */}
        <div
          className="p-8 h-64 flex items-end justify-between gap-2"
          style={{
            border: "1px solid var(--gym-medium-gray)",
            backgroundColor: "rgba(10, 10, 10, 0.3)",
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: "linear-gradient(to top, var(--gym-accent-gold), transparent)",
                opacity: 0.7,
                height: `${30 + Math.random() * 70}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
