// Header — Demo
// Simple header bar shown at the top of the Haala app.

import React from "react";

export default function Header({ title }) {
  return (
    <header style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
      <h1>{title || "Haala 🛠️"}</h1>
    </header>
  );
}
