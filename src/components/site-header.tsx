import { Mail, Phone } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import avatar from '@/assets/profile.png'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { contactHrefs, profile } from '@/data/cv'
import { useScrolledPast } from '@/lib/use-scrolled-past'

const links = [
  { href: '#contact', label: 'Contact' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
]

const quickContacts = [
  { icon: Phone, label: 'Call', href: contactHrefs.phone },
  { icon: Mail, label: 'Email', href: contactHrefs.email },
]

const iconButton = 'hover:bg-accent inline-flex size-9 items-center justify-center rounded-md transition-colors'

export function SiteHeader() {
  const pastHero = useScrolledPast('top')
  const pastContact = useScrolledPast('contact')

  return (
    <header className="bg-background/70 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a href="#top" className="flex min-w-0 items-center font-semibold tracking-tight">
          <AnimatePresence initial={false}>
            {pastHero && (
              <motion.img
                src={avatar}
                alt=""
                className="mr-2 size-8 shrink-0 rounded-full grayscale"
                initial={{ opacity: 0, scale: 0, width: 0, marginRight: 0 }}
                animate={{ opacity: 1, scale: 1, width: 32, marginRight: 8 }}
                exit={{ opacity: 0, scale: 0, width: 0, marginRight: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </AnimatePresence>
          <span className="truncate">{profile.name}</span>
        </a>
        <nav className="flex items-center gap-1 sm:gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground hidden text-sm transition-colors sm:inline"
            >
              {l.label}
            </a>
          ))}
          <AnimatePresence initial={false}>
            {pastContact &&
              quickContacts.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={iconButton}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                >
                  <Icon className="size-5" />
                </motion.a>
              ))}
          </AnimatePresence>
          <AnimatedThemeToggler className={`${iconButton} [&_svg]:size-5`} />
        </nav>
      </div>
    </header>
  )
}
