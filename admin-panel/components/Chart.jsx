// Chart — Demo
// Tiny dependency-free bar chart. data = [ {label, value} ].

import React from "react";

export default function Chart({ data = [] }) {
  // Scale bars relative to the largest value so they fit nicely
  const max = Math.max(1, ...data.map((d) => d.value));

  return (
    <div className="chart" style={{ display: "flex", gap: 12, alignItems: "flex-end", height: 160 }}>
      {data.map((d) => (
        <div key={d.label} style={{ textAlign: "center" }}>
          {/* Bar height is a percentage of the tallest value */}
          <div
            style={{
              width: 32,
              height: `${(d.value / max) * 140}px`,
              background: "#0a7d5a",
            }}
            title={`${d.label}: ${d.value}`}
          />
          <small>{d.label}</small>
        </div>
      ))}
    </div>
  );
}
