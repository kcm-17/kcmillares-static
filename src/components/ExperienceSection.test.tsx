import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ExperienceSection } from './ExperienceSection'
import type { Job } from '@/types'

const experience: Job[] = [
  { company: 'Accenture', role: 'Consultant', period: '2021 – Present', bullets: ['Led projects.'] },
  { company: 'Foundever', role: 'Senior Engineer', period: '2019 – 2021', bullets: ['Built APIs.'] },
]

describe('ExperienceSection', () => {
  it('renders the section heading', () => {
    render(<ExperienceSection experience={experience} />)
    expect(screen.getByRole('heading', { name: /professional experience/i })).toBeInTheDocument()
  })

  it('renders all companies', () => {
    render(<ExperienceSection experience={experience} />)
    expect(screen.getByText('Accenture')).toBeInTheDocument()
    expect(screen.getByText('Foundever')).toBeInTheDocument()
  })
})
