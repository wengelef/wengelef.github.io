import { ActivitySection } from '@/components/activity-section'
import { ContactSection } from '@/components/contact-section'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { Hero } from '@/components/hero'
import { ProjectsSection } from '@/components/projects-section'
import { SiteHeader } from '@/components/site-header'
import { SkillsSection } from '@/components/skills-section'
import { profile } from '@/data/cv'

const year = new Date().getFullYear()

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ContactSection />
        <SkillsSection />
        <ExperienceTimeline />
        <ActivitySection />
        <ProjectsSection />
      </main>
      <footer className="text-muted-foreground border-t py-8 text-center text-sm">
        © {year} {profile.name}
      </footer>
    </>
  )
}
