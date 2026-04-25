import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders heading text', () => {
    render(<SectionHeading>Experience</SectionHeading>)
    expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument()
  })

  it('accepts additional className', () => {
    render(<SectionHeading className="mt-4">Skills</SectionHeading>)
    expect(screen.getByRole('heading', { level: 2, name: 'Skills' })).toBeInTheDocument()
  })
})
