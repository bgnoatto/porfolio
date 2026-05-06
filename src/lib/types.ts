export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  email: string
  linkedin: string
  github: string
  location: string
}

export interface Stat {
  value: string
  label: string
}

export interface TechItem {
  name: string
  iconSlug: string
  dots: number
}

export interface TechCategory {
  category: string
  items: TechItem[]
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  isCurrent: boolean
  bullets: string[]
}

export interface Project {
  title: string
  type: string
  stack: string[]
  description: string
  repo?: string
  link?: string
  flagship?: boolean
}

export interface Education {
  degree: string
  institution: string
  location: string
  years: string
}
