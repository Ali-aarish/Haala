// Sidebar — Demo
// Navigation links that tell App which page to show via onNavigate.

import React from "react";

// The pages this admin panel can switch between
const links = [
  "Dashboard",
  "Users",
  "Vendors",
  "Services",
  "Bookings",
  "Payments",
  "Reports",
];

export default function Sidebar({ onNavigate }) {
  return (
    <nav style={{ width: 180, padding: 16, background: "#f4f4f4" }}>
      <h2>Haala</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {links.map((name) => (
          <li key={name} style={{ margin: "8px 0" }}>
            {/* Clicking a link swaps the active page */}
            <button onClick={() => onNavigate(name)}>{name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
