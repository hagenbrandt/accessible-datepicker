import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from '../Table';

describe('table', () => {
  const head = 'Head 1';
  const headerRowTitle = 'Header';
  const bodyTitle = 'Body Title';
  const bodyRowTitle = 'Body Row 1';
  const cell = 'Table Element 1';
  const component = (
    <Table
      head={head}
      headerRowTitle={headerRowTitle}
      bodyTitle={bodyTitle}
      bodyRowTitle={bodyRowTitle}
      cell={cell}
    />
  );

  beforeEach(() => {
    render(component);
  });

  it('renders a table', () => {
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('renders a columnheader with a given string in a rowgroup', () => {
    expect(screen.getByRole('rowgroup', { name: headerRowTitle })).toBeInTheDocument();
    expect(screen.getByRole('columnheader')).toHaveTextContent(head);
    expect(screen.getByRole('row', { name: headerRowTitle })).toHaveTextContent(head);
  });

  it('renders a cell within a row and a tablebody', () => {
    expect(screen.getByRole('rowgroup', { name: bodyTitle })).toBeInTheDocument();
    expect(screen.getByRole('row', { name: bodyRowTitle })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: cell })).toBeInTheDocument();
  });
});
