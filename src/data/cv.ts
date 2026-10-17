export const profile = {
  name: 'Florian Wengelewski',
  title: 'Product Engineer',
}

export const contact = {
  phone: '+49 176 648 50 30 2',
  email: 'wengelef@gmail.com',
  street: 'Bertha-von-Suttner Str. 1',
  city: '53840 Troisdorf',
}

export const contactHrefs = {
  phone: `tel:${contact.phone.replace(/\s/g, '')}`,
  email: `mailto:${contact.email}`,
}

export const skills: string[] = [
  'Seasoned in agentic coding (claude, antigravity-cli)',
  'Expert in using Android Studio/IntelliJ IDE for Android and Kotlin Multiplatform Development, Android SDK’s and commonly used third-party-libraries',
  'Git version control system',
  'Understanding of the importance of code quality and continuous integration (Unit Testing, static code analysis, Jenkins CI, Github Actions, Fabric/Firebase)',
  'Broad development knowledge in Kotlin and Java',
  'Enthusiastic about Material Design and Mobile User Experience',
  'Clean Architecture and Design Patterns',
  'Functional Reactive Programming (RxJava, coroutines)',
  'Implementing RESTful Clients is second nature (Ktor, Retrofit 2)',
  'ORMs and NoSQL (SQL Delight)',
  'Working in agile environments (Scrum, Kanban)',
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
