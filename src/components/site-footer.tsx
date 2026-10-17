import { Mail, MapPin } from 'lucide-react'
import { siGithub } from 'simple-icons'

import { LinkedinIcon } from '@/components/linkedin-icon'
import { contact, contactHrefs, links, profile } from '@/data/cv'

const year = new Date().getFullYear()

const linkClass = 'hover:text-brand inline-flex items-center gap-2 transition-colors'

export function SiteFooter() {
  return (
    <footer className="text-muted-foreground border-t py-8 text-center text-sm">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4">
        <a href={contactHrefs.email} className={linkClass}>
          <Mail className="size-4" />
          {contact.email}
        </a>
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <LinkedinIcon className="size-4" />
            LinkedIn
          </a>
        )}
        <a href={links.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
            <path d={siGithub.path} />
          </svg>
          GitHub
        </a>
        <span className="inline-flex items-center gap-2">
          <MapPin className="size-4" />
          {contact.location}
        </span>
      </div>
      <p className="mt-4">
        © {year} {profile.name}
      </p>
    </footer>
  )
}
