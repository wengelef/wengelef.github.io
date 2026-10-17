import { Mail, MapPin, Phone } from 'lucide-react'

import { Section } from '@/components/section'
import { BlurFade } from '@/components/ui/blur-fade'
import { contact, contactHrefs } from '@/data/cv'

const rows = [
  { icon: Phone, label: 'Mobile', value: contact.phone, href: contactHrefs.phone },
  { icon: Mail, label: 'Personal', value: contact.email, href: contactHrefs.email },
  { icon: MapPin, label: contact.city, value: contact.street, href: undefined },
]

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-4 sm:grid-cols-3">
        {rows.map(({ icon: Icon, label, value, href }, i) => (
          <BlurFade key={label} inView delay={0.1 * i}>
            <div className="bg-card flex items-center gap-4 rounded-xl border p-4">
              <Icon className="text-muted-foreground size-5 shrink-0" />
              <div className="min-w-0">
                {href ? (
                  <a href={href} className="block truncate font-medium hover:underline">
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
