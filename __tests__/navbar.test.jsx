import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/Navbar.tsx'
 
describe('Page', () => {
  it('renders a link', () => {
    render(<Page />)
 
    const image = screen.getByAltText('Hogeschool logo')
    const link = image.parentElement

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/dashboard')
  })
})