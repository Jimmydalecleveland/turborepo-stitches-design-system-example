import { render, screen } from '@testing-library/react';
import { Card } from './card'

test('vitest quick test', () => {
  render(<Card title="Test Card" href="/">Stuff</Card>)
  expect(screen.getByRole('heading')).toHaveTextContent(/test card/i)
  expect(screen.getByRole('link')).toHaveTextContent(/test card/i)
})
