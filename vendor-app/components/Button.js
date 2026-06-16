// Button — Demo
// A simple reusable button.

import React from "react";

export default function Button({ label, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "8px 16px", cursor: "pointer" }}>
      {label}
    </button>
  );
}
