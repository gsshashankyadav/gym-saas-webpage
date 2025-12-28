export default function ProblemSolution() {
  const problems = [
    "Spreadsheets instead of systems",
    "WhatsApp chaos and lost messages",
    "No real-time attendance",
    "Manual payment tracking",
  ]

  const solutions = [
    "Unified member database",
    "Integrated messaging & notifications",
    "Automated check-in system",
    "Automated billing & receipts",
  ]

  return (
    <section className="gym-container py-24" style={{ borderBottom: "1px solid var(--gym-medium-gray)" }}>
      <div className="grid md:grid-cols-2 gap-16">
        {/* Problems */}
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-12 pb-6"
            style={{ borderBottom: "1px solid var(--gym-accent-red)" }}
          >
            <span style={{ color: "var(--gym-accent-red)" }}>PAIN</span>
            <br />
            Points
          </h2>

          <div className="space-y-6">
            {problems.map((problem, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="font-bold text-2xl mt-1" style={{ color: "var(--gym-accent-red)" }}>
                  ✕
                </div>
                <p className="text-lg" style={{ color: "var(--gym-muted-foreground)" }}>
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-12 pb-6"
            style={{ borderBottom: "1px solid var(--gym-accent-gold)" }}
          >
            <span style={{ color: "var(--gym-accent-gold)" }}>PEAK</span>
            <br />
            Solutions
          </h2>

          <div className="space-y-6">
            {solutions.map((solution, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="font-bold text-2xl mt-1" style={{ color: "var(--gym-accent-gold)" }}>
                  ✓
                </div>
                <p className="text-lg">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
