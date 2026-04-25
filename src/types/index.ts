export interface Client {
  name: string
  bullets: string[]
}

export interface Job {
  company: string
  role: string
  period: string
  description?: string
  clients?: Client[]
  bullets?: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
}

export interface CoreCompetencies {
  ai?: string[]
  technical: string[]
  practices: string[]
}

export interface CVData {
  name: string
  title: string
  email: string
  linkedin: string
  location: string
  visaStatus: string
  profile: string
  competencies: CoreCompetencies
  experience: Job[]
  education: Education
}
