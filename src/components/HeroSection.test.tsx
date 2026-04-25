import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroSection } from './HeroSection'

const props = {
  name: 'Karl Cedrick G. Millares',
  title: 'Full-Stack Software Engineer',
  email: 'karl@kcmillares.com',
  linkedin: 'linkedin.com/in/kcmillares/',
  location: 'Sydney, Australia',
  visaStatus: 'Permanent Resident (Subclass 190)',
}

describe('HeroSection', () => {
  it('renders the full name as a heading', () => {
    render(<HeroSection {...props} />)
    expect(screen.getByRole('heading', { level: 1, name: props.name })).toBeInTheDocument()
  })

  it('renders job title', () => {
    render(<HeroSection {...props} />)
    expect(screen.getByText(props.title)).toBeInTheDocument()
  })

  it('renders email as a mailto link', () => {
    render(<HeroSection {...props} />)
    const link = screen.getByRole('link', { name: /send email/i })
    expect(link).toHaveAttribute('href', `mailto:${props.email}`)
  })

  it('renders linkedin as an external link', () => {
    render(<HeroSection {...props} />)
    const link = screen.getByRole('link', { name: /linkedin/i })
    expect(link).toHaveAttribute('href', `https://${props.linkedin}`)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders location', () => {
    render(<HeroSection {...props} />)
    expect(screen.getByText(props.location)).toBeInTheDocument()
  })

  it('renders visa status badge', () => {
    render(<HeroSection {...props} />)
    expect(screen.getByText(props.visaStatus)).toBeInTheDocument()
  })

  it('does not render any phone number', () => {
    render(<HeroSection {...props} />)
    expect(screen.queryByText(/0[0-9]{3}\s?[0-9]{3}\s?[0-9]{3}/)).not.toBeInTheDocument()
  })
})
