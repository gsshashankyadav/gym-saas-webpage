"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headlineRef.current) return

    const children = headlineRef.current.querySelectorAll(".stagger-item")
    children.forEach((child) => {
      ;(child as HTMLElement).style.opacity = "0"
      ;(child as HTMLElement).style.transform = "translateY(20px)"
    })

    setTimeout(() => {
      children.forEach((child) => {
        ;(child as HTMLElement).style.animation = "stagger-fade-in 0.6s ease-out forwards"
      })
    }, 100)
  }, [])

  return (
    <section className="gym-hero relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-12 gap-0 opacity-[0.03]"
          style={{ borderColor: "var(--gym-accent-gold)" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{ border: "1px solid var(--gym-accent-gold)" }} />
          ))}
        </div>
      </div>

      {/* Accent glows */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 blur-3xl pointer-events-none"
        style={{ backgroundColor: "var(--gym-accent-gold)", opacity: 0.05 }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 blur-3xl pointer-events-none"
        style={{ backgroundColor: "var(--gym-accent-cyan)", opacity: 0.05 }}
      />

      <div className="gym-container z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 z-100  space-y-8" ref={headlineRef}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            <span className="block">PEAK</span>
            <span className="block">PERFORMANCE</span>
          </h1>

          <p className="text-lg md:text-xl max-w-lg leading-relaxed" style={{ color: "var(--gym-muted-foreground)" }}>
            Gym management software built for owners who demand more. No compromises.
          </p>

          <div className="stagger-item flex flex-wrap gap-4 pt-4">
            <button className="gym-btn-primary">Start Free Trial</button>
            <button className="gym-btn-secondary">View Demo</button>
          </div>
        </div>

        {/* Hero visual: abstract performance grid */}
        <div className="  w-full">
          <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid var(--gym-medium-gray)",
                  backgroundColor: "rgba(26, 26, 26, 0.5)",
                  backdropFilter: "blur(4px)",
                  animation: `pulse 3s ease-in-out ${i * 0.1}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Floating metrics overlay */}
          <div
            className="absolute top-6 right-6 space-y-3 p-4"
            style={{
              backgroundColor: "rgba(26, 26, 26, 0.8)",
              backdropFilter: "blur(4px)",
              border: "1px solid var(--gym-medium-gray)",
            }}
          >
            <div className="gym-metric">98%</div>
            <div className="gym-metric-label">Uptime</div>
          </div>

          <div
            className="absolute bottom-6 left-6 space-y-3 p-4"
            style={{
              backgroundColor: "rgba(26, 26, 26, 0.8)",
              backdropFilter: "blur(4px)",
              border: "1px solid var(--gym-medium-gray)",
            }}
          >
            <div className="gym-metric" style={{ color: "var(--gym-accent-cyan)" }}>
              2.3s
            </div>
            <div className="gym-metric-label">Avg Response</div>
          </div>

          <style jsx>{`
            @keyframes pulse {
              0%, 100% {
                background-color: rgba(26, 26, 26, 0.5);
              }
              50% {
                background-color: rgba(0, 217, 255, 0.1);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}
