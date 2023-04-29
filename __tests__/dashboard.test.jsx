import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dashboard from '../src/pages/dashboard/index';

jest.mock('../src/core/api.js', () => {
  return {
    getData: () => Promise.resolve({ name: 'TEST USER' }),
  };
});

describe('Dashboard', () => {
  it('renders the text for Dashboard', async () => {
    await act(async () => {
      render(<Dashboard />);
    });

    const text = screen.getByText('Dashboard');
    const user = screen.getByText('Name: TEST USER');
    expect(text).toBeInTheDocument();
    expect(user).toBeInTheDocument();
  });
});
