import { Mail, MapPin } from 'lucide-react'

import { LinkedinIcon } from '@/components/linkedin-icon'
import { Section } from '@/components/section'
import { BlurFade } from '@/components/ui/blur-fade'
import { MagicCard } from '@/components/ui/magic-card'
import { contact, contactHrefs, links } from '@/data/cv'
import { useIsDark } from '@/lib/use-is-dark'

const rows = [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'florian-wengelewski',
    href: links.linkedin,
    tone: 'bg-[#0A66C2]/10 text-[#0A66C2] dark:text-sky-400',
  },
  {
    icon: Mail,
    label: 'Personal',
    value: contact.email,
    href: contactHrefs.email,
    tone: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: contact.location,
    href: undefined,
    tone: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
]

export function ContactSection() {
  const dark = useIsDark()
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-4 sm:grid-cols-3">
        {rows.map(({ icon: Icon, label, value, href, tone }, i) => (
          <BlurFade key={label} inView delay={0.1 * i}>
            <MagicCard
              className="bg-card rounded-xl border"
              gradientColor={dark ? '#3b2a6b' : '#e9e0ff'}
              gradientFrom="#8b5cf6"
              gradientTo="#c4b5fd"
            >
              <div className="flex items-center gap-4 p-4">
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${tone}`}>
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith('https:') && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="block truncate hover:text-brand font-medium transition-colors hover:underline">
                      {value}
                    </a>
                  ) : (
                    <div className="font-medium">{value}</div>
                  )}
                  <div className="text-muted-foreground text-sm">{label}</div>
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </Section>
  )
}
