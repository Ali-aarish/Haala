// Header — Demo
// A simple header bar shown at the top of the app.

import React from "react";

export default function Header({ title }) {
  return (
    <header style={{ borderBottom: "1px solid #ddd", padding: "12px" }}>
      <h1>{title}</h1>
    </header>
  );
}
