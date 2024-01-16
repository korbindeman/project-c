import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '../app/Navbar.tsx'
 
describe('Navbar', () => {
  it('renders a link', () => {
    render(<Navbar />)
 
    const image = screen.getByAltText('Hogeschool logo')
    const link = image.parentElement

    expect(image).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/dashboard')
  })
})


describe('Navbar', () => {
  it('renders signout button', () => {
    render(<Navbar />);

    const signoutButton = screen.getByTestId("signout-button");
    const link = signoutButton.parentElement

    expect(signoutButton).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/api/auth/signout')
  });
});