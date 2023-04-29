import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dashboard from '../src/pages/dashboard/index';

jest.mock('../src/core/api.js', () => {
  return {
    getEventData: () => Promise.resolve([]),
  };
});

describe('Dashboard', () => {
  it('renders the text for Dashboard and Filter', async () => {
    await act(async () => {
      render(<Dashboard />);
    });

    const text = screen.getByText('Dashboard');
    const filter = screen.getByText('Filter');
    expect(text).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
  });
});
