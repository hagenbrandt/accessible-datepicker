import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from '../Table';

describe('table', () => {
  const head = 'Head 1';
  const component = <Table head={head} />;

  beforeEach(() => {
    render(component);
  });

  it('renders a table', () => {
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('renders a columnheader with a given string in a rowgroup', () => {
    expect(screen.getByRole('rowgroup')).toBeInTheDocument();
    expect(screen.getByRole('columnheader')).toHaveTextContent(head);
    expect(screen.getByRole('row')).toHaveTextContent(head);
  });
});
