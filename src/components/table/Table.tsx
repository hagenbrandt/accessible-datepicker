import React from 'react';
import { Button, ButtonType } from '../button/Button';

type ButttonTableCellType = ButtonType & Pick<TableCellType, 'cellKey'>;

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
  data: string | JSX.Element;
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

  const isDataString = typeof data === 'string';
  const keyForCell =
    isDataString && cellKey ? `${data}-${cellKey}` : Math.floor(Math.random() * 100);

  if (cellType === 'headerCell') {
    return <th key={keyForCell}>{data}</th>;
  }

  return <td key={keyForCell}>{data}</td>;
};

export const ButtonTableCell = (props: ButttonTableCellType) => {
  const cellType = 'dataCell' as CellType;
  const button = (
    <Button
      buttonText={props.buttonText}
      buttonValue={props.buttonValue}
      isDisabled={props.isDisabled ?? false}
      onClick={props.onClick}
    />
  );

  return <TableCell data={button} cellType={cellType} cellKey={props.cellKey} />;
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
