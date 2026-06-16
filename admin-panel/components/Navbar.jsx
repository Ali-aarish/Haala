// Navbar — Demo
// Top bar shown above every admin page.

import React from "react";

export default function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 16px",
        background: "#0a7d5a",
        color: "#fff",
      }}
    >
      <span>Haala Admin 🖥️</span>
      {/* Placeholder for the logged-in admin */}
      <span>Ahmad (admin)</span>
    </header>
  );
}
