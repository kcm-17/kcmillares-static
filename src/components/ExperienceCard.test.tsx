import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ExperienceCard } from './ExperienceCard'
import type { Job } from '@/types'

const jobWithBullets: Job = {
  company: 'Foundever',
  role: 'Senior Software Engineer',
  period: 'Dec 2019 – Mar 2021',
  bullets: ['Built API endpoints.', 'Migrated .NET Framework to .NET Core.'],
}

const jobWithClients: Job = {
  company: 'Accenture, Inc.',
  role: 'Software Engineering Consultant',
  period: 'Mar 2021 – Present',
  clients: [
    { name: 'Health Insurance Co', bullets: ['Developed AI platform.'] },
    { name: 'Wealth Management Co', bullets: ['Led team of 5 engineers.'] },
  ],
}

const jobWithDescription: Job = {
  company: 'AIG',
  role: 'Analyst Programmer',
  period: 'Jun 2017 – Jul 2018',
  description: 'Managed day-to-day application maintenance.',
}

describe('ExperienceCard', () => {
  it('renders company name', () => {
    render(<ExperienceCard job={jobWithBullets} />)
    expect(screen.getByText('Foundever')).toBeInTheDocument()
  })

  it('renders role title', () => {
    render(<ExperienceCard job={jobWithBullets} />)
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument()
  })

  it('renders period', () => {
    render(<ExperienceCard job={jobWithBullets} />)
    expect(screen.getByText('Dec 2019 – Mar 2021')).toBeInTheDocument()
  })

  it('renders bullet points', () => {
    render(<ExperienceCard job={jobWithBullets} />)
    expect(screen.getByText('Built API endpoints.')).toBeInTheDocument()
    expect(screen.getByText('Migrated .NET Framework to .NET Core.')).toBeInTheDocument()
  })

  it('renders client names and their bullets', () => {
    render(<ExperienceCard job={jobWithClients} />)
    expect(screen.getByText('Health Insurance Co')).toBeInTheDocument()
    expect(screen.getByText('Developed AI platform.')).toBeInTheDocument()
    expect(screen.getByText('Wealth Management Co')).toBeInTheDocument()
    expect(screen.getByText('Led team of 5 engineers.')).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<ExperienceCard job={jobWithDescription} />)
    expect(screen.getByText('Managed day-to-day application maintenance.')).toBeInTheDocument()
  })
})
