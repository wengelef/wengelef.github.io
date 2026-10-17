import avatar from '@/assets/avatar.jpg'
import avatarXs from '@/assets/avatar_xs.jpg'
import { BlurFade } from '@/components/ui/blur-fade'
import { profile } from '@/data/cv'

export function Hero() {
  return (
    <section id="top" className="relative h-[400px] overflow-hidden lg:h-[600px]">
      {/* grayscale is applied in CSS, so any replacement image is automatically black & white */}
      <picture>
        <source media="(min-width: 1024px)" srcSet={avatar} />
        <img
          src={avatarXs}
          alt={profile.name}
          className="absolute inset-0 size-full object-cover grayscale contrast-110"
        />
      </picture>
      <div className="from-background via-background/20 absolute inset-0 bg-gradient-to-t to-transparent" />
      <div className="relative mx-auto flex h-full max-w-5xl items-end px-4 pb-8">
        <BlurFade delay={0.1} duration={0.6}>
          <div className="bg-background/60 rounded-2xl border p-5 backdrop-blur-md sm:p-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
            <p className="text-muted-foreground mt-2 text-xl sm:text-2xl">{profile.title}</p>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
