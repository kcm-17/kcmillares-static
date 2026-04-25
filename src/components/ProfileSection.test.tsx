import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProfileSection } from './ProfileSection'

describe('ProfileSection', () => {
  it('renders the section heading', () => {
    render(<ProfileSection profile="Experienced engineer." />)
    expect(screen.getByRole('heading', { name: /professional profile/i })).toBeInTheDocument()
  })

  it('renders the profile text', () => {
    render(<ProfileSection profile="Experienced engineer." />)
    expect(screen.getByText('Experienced engineer.')).toBeInTheDocument()
  })
})
