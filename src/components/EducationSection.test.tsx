import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { EducationSection } from './EducationSection'
import type { Education } from '@/types'

const education: Education = {
  degree: 'Bachelor of Science in Information Technology',
  institution: 'University of Santo Tomas',
  location: 'Manila, Philippines',
  period: '2009 – 2013',
}

describe('EducationSection', () => {
  it('renders the section heading', () => {
    render(<EducationSection education={education} />)
    expect(screen.getByRole('heading', { name: /education/i })).toBeInTheDocument()
  })

  it('renders degree', () => {
    render(<EducationSection education={education} />)
    expect(screen.getByText(education.degree)).toBeInTheDocument()
  })

  it('renders institution name', () => {
    render(<EducationSection education={education} />)
    expect(screen.getByText(education.institution)).toBeInTheDocument()
  })

  it('renders location', () => {
    render(<EducationSection education={education} />)
    expect(screen.getByText(education.location)).toBeInTheDocument()
  })

  it('renders period', () => {
    render(<EducationSection education={education} />)
    expect(screen.getByText(education.period)).toBeInTheDocument()
  })
})
