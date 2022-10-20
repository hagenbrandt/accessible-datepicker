import React from 'react';

type TableType = {
  head: string;
  headerRowTitle: string;
  bodyTitle: string;
  bodyRowTitle: string;
  cell: string;
};

type TableRowType = {
  tableRowTitle: string;
  cellItems: string[];
  rowType: CellType;
  rowKey?: string;
};

type TableCellType = {
  data: string;
  cellType: CellType;
  cellKey?: number;
};

export type CellType = 'headerCell' | 'dataCell';

export const Table = ({ head, headerRowTitle, bodyTitle, bodyRowTitle, cell }: TableType) => {
  return (
    <table>
      <thead title={headerRowTitle}>
        <TableRow
          tableRowTitle={headerRowTitle}
          cellItems={[head]}
          rowType="headerCell"
          rowKey="header-row-1"
        />
      </thead>
      <tbody title={bodyTitle}>
        <TableRow
          tableRowTitle={bodyRowTitle}
          cellItems={[cell]}
          rowType="dataCell"
          rowKey="body-row-key-1"
        />
      </tbody>
    </table>
  );
};

export const TableCell = ({ data, cellType, cellKey }: TableCellType) => {
  if (!data) {
    return <></>;
  }

  const keyForCell = cellKey ? `${data}-${cellKey}` : data;

  if (cellType === 'headerCell') {
    return <th key={keyForCell}>{data}</th>;
  }

  return <td key={keyForCell}>{data}</td>;
};

export const TableRow = ({ tableRowTitle, cellItems, rowType, rowKey }: TableRowType) => {
  if (!cellItems.length) {
    return <></>;
  }

  const keyForRow = rowKey ? `${rowType}-${rowKey}` : rowType;

  return (
    <tr title={tableRowTitle} key={keyForRow}>
      {cellItems.map((item, index) => {
        return <TableCell data={item} cellType={rowType} key={index} />;
      })}
    </tr>
  );
};
