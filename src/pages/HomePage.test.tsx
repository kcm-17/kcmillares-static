import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { HomePage } from './HomePage'

function renderHomePage() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  )
}

describe('HomePage', () => {
  it('renders the hero name heading', () => {
    renderHomePage()
    expect(screen.getByRole('heading', { level: 1, name: /Karl Cedrick G. Millares/i })).toBeInTheDocument()
  })

  it('renders professional profile section', () => {
    renderHomePage()
    expect(screen.getByRole('heading', { name: /professional profile/i })).toBeInTheDocument()
  })

  it('renders core competencies section', () => {
    renderHomePage()
    expect(screen.getByRole('heading', { name: /core competencies/i })).toBeInTheDocument()
  })

  it('renders professional experience section', () => {
    renderHomePage()
    expect(screen.getByRole('heading', { name: /professional experience/i })).toBeInTheDocument()
  })

  it('renders education section', () => {
    renderHomePage()
    expect(screen.getByRole('heading', { name: /education/i })).toBeInTheDocument()
  })

  it('does not display a phone number anywhere', () => {
    renderHomePage()
    expect(screen.queryByText(/\b04\d{2}\s?\d{3}\s?\d{3}\b/)).not.toBeInTheDocument()
  })

  it('renders contact email in footer', () => {
    renderHomePage()
    const footerLink = screen.getAllByRole('link', { name: /karl@kcmillares\.com/i })
    expect(footerLink.length).toBeGreaterThan(0)
  })
})
