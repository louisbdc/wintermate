import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getDebriefingById } from "@/data/debriefing"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { DebriefingHero } from "@/components/sections/DebriefingHero"
import { VideoAnalysis } from "@/components/sections/VideoAnalysis"
import { MetricsGrid } from "@/components/sections/MetricsGrid"
import { CoachFeedback } from "@/components/sections/CoachFeedback"
import { ActionPlan } from "@/components/sections/ActionPlan"

interface DebriefingPageProps {
  readonly params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: DebriefingPageProps): Promise<Metadata> {
  const { id } = await params
  const session = getDebriefingById(id)
  if (!session) return { title: "Débriefing introuvable | Winter Mate" }

  return {
    title: `Débriefing - ${session.skierName} | Winter Mate`,
    description: `Analyse technique de ${session.skierName} - ${session.discipline} à ${session.location}`,
  }
}

export default async function DebriefingPage({ params }: DebriefingPageProps) {
  const { id } = await params
  const session = getDebriefingById(id)
  if (!session) notFound()

  return (
    <>
      <Navbar />
      <DebriefingHero session={session} />
      <VideoAnalysis session={session} />
      <MetricsGrid session={session} />
      <CoachFeedback session={session} />
      <ActionPlan session={session} />
      <Footer />
    </>
  )
}
