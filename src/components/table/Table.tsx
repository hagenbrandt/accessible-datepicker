import React from 'react';

type TableType = {
  head: string;
  headerRowTitle: string;
  bodyTitle: string;
  bodyRowTitle: string;
  cell: string;
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

export const renderTableCell = (data: string, cellType: CellType, key?: number) => {
  if (!data) {
    return <></>;
  }

  const cellKey = key ? `${data}-${key}` : data;

  if (cellType === 'headerCell') {
    return <th key={cellKey}>{data}</th>;
  }

  return <td key={cellKey}>{data}</td>;
};

export const renderTableRow = (
  tableRowTitle: string,
  cellItems: string[],
  rowType: CellType,
  key?: string,
) => {
  if (!cellItems.length) {
    return <></>;
  }

  const rowKey = key ? `${rowType}-${key}` : rowType;

  return (
    <tr title={tableRowTitle} key={rowKey}>
      {cellItems.map((item, index) => {
        return renderTableCell(item, rowType, index);
      })}
    </tr>
  );
};
