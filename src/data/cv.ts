export const profile = {
  name: 'Florian Wengelewski',
  title: 'Product Engineer',
}

export const contact = {
  email: 'wengelef@gmail.com',
  location: '53840 Troisdorf / Cologne Area',
}

export const contactHrefs = {
  email: `mailto:${contact.email}`,
}

export interface SkillGroup {
  title: string
  icon: 'mobile' | 'web' | 'architecture' | 'quality' | 'agentic' | 'team'
  summary: string
  tags: string[]
}

export const skills: SkillGroup[] = [
  {
    title: 'Mobile',
    icon: 'mobile',
    summary: 'Android and Kotlin Multiplatform, with a love for Material Design and mobile UX',
    tags: ['Kotlin', 'Java', 'Kotlin Multiplatform', 'Android SDK', 'Android Studio / IntelliJ', 'Material Design'],
  },
  {
    title: 'Web',
    icon: 'web',
    summary: 'Modern web frontends, like this site',
    tags: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'GitHub Pages'],
  },
  {
    title: 'Architecture',
    icon: 'architecture',
    summary: 'Clean Architecture, design patterns and functional reactive programming',
    tags: ['Clean Architecture', 'Design Patterns', 'Coroutines', 'RxJava', 'Ktor', 'Retrofit 2', 'SQLDelight'],
  },
  {
    title: 'Quality & CI',
    icon: 'quality',
    summary: 'Code quality and continuous integration as a habit',
    tags: ['Unit Testing', 'Static Analysis', 'Jenkins', 'GitHub Actions', 'Firebase', 'Git'],
  },
  {
    title: 'Agentic coding',
    icon: 'agentic',
    summary: 'Seasoned in building software with AI agents',
    tags: ['Claude', 'antigravity-cli'],
  },
  {
    title: 'Ways of working',
    icon: 'team',
    summary: 'At home in agile environments',
    tags: ['Scrum', 'Kanban'],
  },
]

export interface Job {
  companyName: string
  time: string
  title: string
  current?: boolean
  items: string[]
}

// Newest first. Set `current: true` on the job that is still ongoing.
export const jobs: Job[] = [
  {
    companyName: 'appDev GmbH & Co KG',
    time: 'since January 2022',
    title: 'Senior Android & KMP Engineer / Team Lead',
    current: true,
    items: [
      'Contributed to the development of the ePA white-label healthcare SDK for insurance providers, focusing on modules like the medication plan, document management, push notifications, digital vaccination pass, E-Prescription, and consent management, etc.',
      'Developed cross-platform modules using KMP for backend communication and business logic consumed by Android and iOS. Built out native UI components using Jetpack Compose following Design specifications from Figma, including strong accessibility support',
      'Functioned as Team Lead, collaborating across the team from requirements engineering through to implementation and final QA; worked closely with iOS Engineers to align platform delivery',
    ],
  },
  {
    companyName: 'REWE Digital GmbH',
    time: 'April 2019 - December 2021',
    title: 'Software Engineer',
    items: [
      'Development of the native Android Client in Kotlin for the new REWE mobile App experience',
      'Maintenance of the legacy REWE Android App',
      'Creating mobile service endpoints',
      'Unit- and Integration testing',
    ],
  },
  {
    companyName: 'nextmarkets GmbH',
    time: 'January 2017 - April 2019',
    title: 'Software Engineer',
    items: [
      'Development of the native Android Client in Kotlin for the CFD Trading Platform nextmarkets',
      'Migration of existing Java code to Kotlin',
      'Unit- and Integration testing',
      'Supporting Design and Usability Concepts',
    ],
  },
  {
    companyName: 'RockAByte GmbH',
    time: 'January 2015 - January 2017',
    title: 'Android Developer',
    items: [
      'Hands on development of Android applications',
      'Working on multiple projects independently as well as in agile teams',
      'Maintaining stability of projects',
      'Improving usability and design of existing apps',
      'Unit- and Integration testing',
      'Minor C++ programming of cross-platform utility tools',
      'Help identify and reduce crash rates of legacy applications and improving code quality',
    ],
  },
  {
    companyName: 'Hottgenroth Software GmbH',
    time: 'September 2014 - December 2014',
    title: 'Unity Development internship',
    items: [
      'Unity programming support for a mobile app to acquire building data on a smartphone or tablet',
      'Creating 3D-Models with Blender',
    ],
  },
  {
    companyName: 'Nurogames GmbH',
    time: 'March 2012 - September 2013',
    title: 'Android Developer',
    items: [
      'Cross-platform mobile game development in C++ with Cocos2D-X for iOS and Android',
      'Expanding the internal game engine',
    ],
  },
]

export interface Project {
  title: string
  url: string
  texts: string[]
}

export const projects: Project[] = [
  {
    title: 'Validate',
    url: 'https://github.com/wengelef/validate',
    texts: ['Validation DSL for Kotlin Objects'],
  },
  {
    title: 'Functional Android',
    url: 'https://github.com/wengelef/FunctionalAndroid',
    texts: ['Android Sample Application using Clean Architecture and FunctionalProgramming Paradigms'],
  },
  {
    title: 'Ktor mobile push gateway',
    url: 'https://github.com/wengelef/ktor_pushgw',
    texts: ['Push gateway for iOS and Android using Firebase'],
  },
  {
    title: 'RxFileUtils',
    url: 'https://github.com/wengelef/RxFileUtils',
    texts: ['Reactive File Utilities for the Android File System'],
  },
  {
    title: 'Builder',
    url: 'https://github.com/wengelef/Builder',
    texts: ['Java Annotation (@Builder) and AnnotationProcessor', 'Generates Builder classes for POJO’s'],
  },
  {
    title: 'This website',
    url: 'https://github.com/wengelef/wengelef.github.io',
    texts: ['Personal CV site built with React, TypeScript, Vite and Tailwind CSS, developed with Claude Code'],
  },
]

export const interests = {
  ari: { title: 'Ari', text: 'My pup and favorite coworker. Walks, fetch and zoomies.' },
  fitness: { title: 'Fitness', text: 'Lifting and staying active to balance the desk.' },
  finance: { title: 'Finance', text: 'Markets, investing and long-term thinking.' },
  travel: { title: 'Traveling', text: 'Exploring new places, food and cultures.' },
  gaming: { title: 'Gaming', text: 'Long-time gamer, from RPGs to co-op nights.' },
}

// Used for the Activity link and the schema.org `sameAs` links. Add `linkedin` here to include it.
export const links: { github: string; linkedin?: string } = {
  github: 'https://github.com/wengelef',
  linkedin: 'https://www.linkedin.com/in/florian-wengelewski',
}
