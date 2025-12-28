"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import SocialProof from "@/components/social-proof"
import ProblemSolution from "@/components/problem-solution"
import FeatureTimeline from "@/components/feature-timeline"
import ProductPreview from "@/components/product-preview"
import WhyDifferent from "@/components/why-different"
import PricingTeaser from "@/components/pricing-teaser"
import FinalCTA from "@/components/final-cta"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="bg-gym-black text-gym-white">
      <HeroSection />
      <SocialProof />
      <ProblemSolution />
      <FeatureTimeline />
      <ProductPreview />
      <WhyDifferent />
      <PricingTeaser />
      <FinalCTA />
    </main>
  )
}
