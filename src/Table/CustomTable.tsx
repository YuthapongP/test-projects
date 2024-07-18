import React from "react";

const mockColumn = [
  { key: "id", header: "ID", accessor: "id" },
  { key: "name", header: "Name", accessor: "name" },
  { key: "age", header: "Age", accessor: "age" },
];

const mockData = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
];

export default function CustomTable({ data = mockData, columns = mockColumn }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <CustomTable.Row key={rowIndex}>
            {columns.map((column) => (
              <CustomTable.Column key={column.key}>
                {row[column.accessor as keyof typeof row]}
              </CustomTable.Column>
            ))}
          </CustomTable.Row>
        ))}
      </tbody>
    </table>
  );
}

interface RowType {
  children: React.ReactNode;
}

const Row: React.FC<RowType> = ({ children }) => {
  return <tr>{children}</tr>;
};

interface ColumnType {
  children: React.ReactNode;
}

const Column: React.FC<ColumnType> = ({ children }) => {
  return <td>{children}</td>;
};

CustomTable.Row = Row;

CustomTable.Column = Column;
