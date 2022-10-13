import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from '../Table';

describe('table', () => {
  it('renders a table', () => {
    render(<Table />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
