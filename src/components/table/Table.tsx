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
  key?: string;
};

type TableCellType = {
  data: string;
  cellType: CellType;
  key?: number;
};

export type CellType = 'headerCell' | 'dataCell';

export const Table = ({ head, headerRowTitle, bodyTitle, bodyRowTitle, cell }: TableType) => {
  return (
    <table>
      <thead title={headerRowTitle}>
        <tr title={headerRowTitle}>
          <th>{head}</th>
        </tr>
      </thead>
      <tbody title={bodyTitle}>
        <tr title={bodyRowTitle}>
          <td>{cell}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const TableCell = ({ data, cellType, key }: TableCellType) => {
  if (!data) {
    return <></>;
  }

  const cellKey = key ? `${data}-${key}` : data;

  if (cellType === 'headerCell') {
    return <th key={cellKey}>{data}</th>;
  }

  return <td key={cellKey}>{data}</td>;
};

export const TableRow = ({ tableRowTitle, cellItems, rowType, key }: TableRowType) => {
  if (!cellItems.length) {
    return <></>;
  }

  const rowKey = key ? `${rowType}-${key}` : rowType;

  return (
    <tr title={tableRowTitle} key={rowKey}>
      {cellItems.map((item, index) => {
        return <TableCell data={item} cellType={rowType} key={index} />;
      })}
    </tr>
  );
};
