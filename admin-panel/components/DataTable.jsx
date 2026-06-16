// DataTable — Demo
import React from "react";

// Generic table for Haala admin: columns = [{key,label}], rows = array of objects
export default function DataTable({ columns = [], rows = [] }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={row.id || i}>
            {columns.map((c) => (
              <td key={c.key}>{String(row[c.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
