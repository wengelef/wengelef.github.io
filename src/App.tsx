import { lazy, Suspense, useEffect } from 'react'

import { ContactSection } from '@/components/contact-section'
import { DeferUntilVisible } from '@/components/defer-until-visible'
import { Hero } from '@/components/hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

// Everything below the fold loads as separate chunks to keep the initial bundle small.
const SkillsSection = lazy(() =>
  import('@/components/skills-section').then((m) => ({ default: m.SkillsSection })),
)
const ExperienceTimeline = lazy(() =>
  import('@/components/experience-timeline').then((m) => ({ default: m.ExperienceTimeline })),
)
const ActivitySection = lazy(() =>
  import('@/components/activity-section').then((m) => ({ default: m.ActivitySection })),
)
const InterestsSection = lazy(() =>
  import('@/components/interests-section').then((m) => ({ default: m.InterestsSection })),
)
const ProjectsSection = lazy(() =>
  import('@/components/projects-section').then((m) => ({ default: m.ProjectsSection })),
)

// The lazy sections don't exist yet when the browser resolves a deep link like /#projects.
// This mounts together with them (inside the same Suspense boundary), so scroll there once they do.
function ScrollToHash() {
  useEffect(() => {
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView()
  }, [])
  return null
}

export default function App() {
  return (
    <>
      <div
        aria-hidden="true"
        className="text-foreground/30 pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_85%)]"
      />
      <SiteHeader />
      <main>
        <Hero />
        <ContactSection />
        <Suspense fallback={null}>
          <SkillsSection />
          <ExperienceTimeline />
          <DeferUntilVisible id="activity" minHeight={400}>
            <ActivitySection />
          </DeferUntilVisible>
          <DeferUntilVisible id="interests" minHeight={900}>
            <InterestsSection />
          </DeferUntilVisible>
          <ProjectsSection />
          <ScrollToHash />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
