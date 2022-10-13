import React from 'react';

type TableType = {
  head: string;
};

export const Table = ({ head }: TableType) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{head}</th>
        </tr>
      </thead>
    </table>
  );
};
