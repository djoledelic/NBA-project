import React from 'react';
import { render, screen } from '@testing-library/react';
import DraftLottery from './DraftLottery';

test('renders learn react link', () => {
  render(<DraftLottery />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
