export default function SocialProof() {
  const gyms = [
    { name: "CrossFit Elite", logo: "★" },
    { name: "Iron Gym Co", logo: "◆" },
    { name: "Peak Fitness", logo: "▲" },
    { name: "Steel Core", logo: "●" },
    { name: "Apex Training", logo: "■" },
    { name: "Force Gym", logo: "✦" },
  ]

  return (
    <section
      className="gym-container"
      style={{
        borderTop: "1px solid var(--gym-medium-gray)",
        borderBottom: "1px solid var(--gym-medium-gray)",
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      <p className="text-sm uppercase tracking-widest mb-12" style={{ color: "var(--gym-muted-foreground)" }}>
        Trusted by 500+ gym owners
      </p>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
        {gyms.map((gym) => (
          <div
            key={gym.name}
            className="flex flex-col items-center justify-center space-y-2 opacity-60 hover:opacity-100 transition-opacity"
          >
            <div style={{ fontSize: "2.25rem", color: "var(--gym-accent-gold)" }}>{gym.logo}</div>
            <p className="text-xs uppercase tracking-wider" style={{ color: "var(--gym-muted-foreground)" }}>
              {gym.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
