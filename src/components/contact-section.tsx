import { Mail, MapPin, Phone } from 'lucide-react'

import { Section } from '@/components/section'
import { BlurFade } from '@/components/ui/blur-fade'
import { contact, contactHrefs } from '@/data/cv'

const rows = [
  {
    icon: Phone,
    label: 'Mobile',
    value: contact.phone,
    href: contactHrefs.phone,
    tone: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
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
    label: contact.city,
    value: contact.street,
    href: undefined,
    tone: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
]

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-4 sm:grid-cols-3">
        {rows.map(({ icon: Icon, label, value, href, tone }, i) => (
          <BlurFade key={label} inView delay={0.1 * i}>
            <div className="bg-card flex items-center gap-4 rounded-xl border p-4">
              <span className={`flex size-10 shrink-0 items-center justify-center rounded-full ${tone}`}>
                <Icon className="size-5" />
              </span>
              <div className="min-w-0">
                {href ? (
                  <a href={href} className="block truncate hover:text-brand font-medium transition-colors hover:underline">
                    {value}
                  </a>
                ) : (
                  <div className="font-medium">{value}</div>
                )}
                <div className="text-muted-foreground text-sm">{label}</div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  )
}
