import { render, screen } from '@testing-library/react';
import Header from './Header';

test('render Header with logo and tag line', () => {
  render(<Header />);

  const tagLine = 'ACCELERATE YOUR AMAZON PPC';
  expect(screen.getByAltText(/Sellics/i)).toBeInTheDocument();
  expect(screen.getByText(tagLine)).toBeInTheDocument();
});
