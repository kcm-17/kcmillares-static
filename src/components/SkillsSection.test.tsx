import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SkillsSection } from './SkillsSection'

const competencies = {
  technical: ['ReactJS', '.NET (C#)', 'Python'],
  practices: ['Agile / Scrum', 'CI/CD'],
}

describe('SkillsSection', () => {
  it('renders the section heading', () => {
    render(<SkillsSection competencies={competencies} />)
    expect(screen.getByRole('heading', { name: /core competencies/i })).toBeInTheDocument()
  })

  it('renders all technical skills as badges', () => {
    render(<SkillsSection competencies={competencies} />)
    expect(screen.getByText('ReactJS')).toBeInTheDocument()
    expect(screen.getByText('.NET (C#)')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('renders all practice skills as badges', () => {
    render(<SkillsSection competencies={competencies} />)
    expect(screen.getByText('Agile / Scrum')).toBeInTheDocument()
    expect(screen.getByText('CI/CD')).toBeInTheDocument()
  })

  it('renders Technical and Practices group labels', () => {
    render(<SkillsSection competencies={competencies} />)
    expect(screen.getByText('Technical')).toBeInTheDocument()
    expect(screen.getByText('Practices')).toBeInTheDocument()
  })
})
