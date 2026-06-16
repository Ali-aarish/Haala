// Button — Demo
// A tiny reusable button used across Haala screens.

import React from "react";

export default function Button({ label, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{ padding: "8px 14px" }}>
      {label}
    </button>
  );
}
