import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { profile } from '@/data/cv'

const links = [
  { href: '#contact', label: 'Contact' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
]

export function SiteHeader() {
  return (
    <header className="bg-background/70 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
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
          <AnimatedThemeToggler className="hover:bg-accent [&_svg]:size-5 inline-flex size-9 items-center justify-center rounded-md transition-colors" />
        </nav>
      </div>
    </header>
  )
}
