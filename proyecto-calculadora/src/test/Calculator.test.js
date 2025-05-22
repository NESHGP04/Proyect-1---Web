import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from '../pages/Calculator'

test('debe renderizar la calculadora', () => {
  render(<Calculator />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

test('debe sumar correctamente', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('+'))
  fireEvent.click(screen.getByText('3'))
  fireEvent.click(screen.getByText('='))
  expect(screen.getByRole('textbox').value).toBe('5')
})

test('debe limpiar el display', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByText('9'))
  fireEvent.click(screen.getByText('C'))
  expect(screen.getByRole('textbox').value).toBe('')
})
