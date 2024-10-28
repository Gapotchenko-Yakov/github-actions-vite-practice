
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  test('renders Vite and React logos', () => {
    render(<App />)

    const viteLogo = screen.getByAltText(/Vite logo/i)
    const reactLogo = screen.getByAltText(/React logo/i)

    expect(viteLogo).toBeInTheDocument()
    expect(reactLogo).toBeInTheDocument()
  })

  test('increments count when button is clicked', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /count is/i })
    const countText = screen.getByText(/count is 0/i)

    expect(countText).toBeInTheDocument()

    fireEvent.click(button)

    const updatedCountText = screen.getByText(/count is 1/i)
    expect(updatedCountText).toBeInTheDocument()
  })

  test('renders the correct heading and link texts', () => {
    render(<App />)

    const heading = screen.getByText(/Vite \+ React/i)
    expect(heading).toBeInTheDocument()

    const readTheDocs = screen.getByText(/Click on the Vite and React logos to learn more/i)
    expect(readTheDocs).toBeInTheDocument()
  })
})
