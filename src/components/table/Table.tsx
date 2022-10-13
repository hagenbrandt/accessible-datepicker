import React from 'react';

type TableType = {
  head: string;
  headerRowTitle: string;
  bodyTitle: string;
  bodyRowTitle: string;
  cell: string;
};

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
