import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableCell, TableRow, Table } from '../Table';
import { makeSnapshotTest } from '../../../helper/testHelper';

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

  makeSnapshotTest(component, 'table');
});

describe('TableCell', () => {
  const cellContent = 'Cell Content 1';
  const button = <button>Push</button>;
  const tableWrapperWithHeaderCell = (
    <table>
      <thead>
        <tr>
          <TableCell data={cellContent} cellType="headerCell" cellKey={1} />
        </tr>
      </thead>
    </table>
  );
  const tableWrapperWithDataCell = (
    <table>
      <tbody>
        <tr>
          <TableCell data={cellContent} cellType="dataCell" cellKey={2} />
        </tr>
      </tbody>
    </table>
  );
  const tableCellWithButton = (
    <table>
      <tbody>
        <tr>
          <TableCell data={button} cellType="dataCell" cellKey={2} />
        </tr>
      </tbody>
    </table>
  );

  it('renders a columnheader with given string', () => {
    render(tableWrapperWithHeaderCell);

    expect(screen.getByRole('columnheader')).toHaveTextContent(cellContent);
  });

  it('renders a data cell with given content', () => {
    render(tableWrapperWithDataCell);

    expect(screen.getByRole('cell')).toHaveTextContent(cellContent);
  });

  it('returns empty tag when no data is given', () => {
    const { container } = render(<TableCell data={''} cellType="headerCell" />);

    expect(container).toBeEmptyDOMElement();
  });

  it('returns data cell with button element', () => {
    render(tableCellWithButton);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  makeSnapshotTest(tableWrapperWithHeaderCell, 'columnheader');
  makeSnapshotTest(tableWrapperWithDataCell, 'cell');
});

describe('TableRow', () => {
  const tableRowTitle = 'Table Row Title';
  const cellItems = ['Item 1', 'Item 2', 'Item 3'];
  const headerRowKey = 'Head-Key-1';
  const dataRowKey = 'Data-Key-1';

  const tableRowWithHeaderCells = (
    <table>
      <thead>
        <TableRow
          tableRowTitle={tableRowTitle}
          cellItems={cellItems}
          rowType="headerCell"
          rowKey={headerRowKey}
        />
      </thead>
    </table>
  );
  const tableRowWithDataCells = (
    <table>
      <thead>
        <TableRow
          tableRowTitle={tableRowTitle}
          cellItems={cellItems}
          rowType="dataCell"
          rowKey={dataRowKey}
        />
      </thead>
    </table>
  );

  it('renders a table row with header cells', () => {
    render(tableRowWithHeaderCells);

    expect(screen.getAllByRole('columnheader')).toHaveLength(cellItems.length);
    cellItems.forEach((item, index) => {
      expect(screen.getByRole('columnheader', { name: item })).toHaveTextContent(cellItems[index]);
    });
  });

  it('renders a table row with data cells', () => {
    render(tableRowWithDataCells);

    expect(screen.getAllByRole('cell')).toHaveLength(cellItems.length);
    cellItems.forEach((item, index) => {
      expect(screen.getByRole('cell', { name: item })).toHaveTextContent(cellItems[index]);
    });
  });

  it('table row has a title with given content', () => {
    render(tableRowWithHeaderCells);

    expect(screen.getByRole('row')).toHaveAttribute('title', tableRowTitle);
  });

  it('returns empty tag when no data is given', () => {
    const { container } = render(
      <TableRow
        tableRowTitle={tableRowTitle}
        cellItems={[]}
        rowType="dataCell"
        rowKey="Key-For-Empty-Row"
      />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  makeSnapshotTest(tableRowWithHeaderCells, 'table');
  makeSnapshotTest(tableRowWithDataCells, 'table');
});
