// ServiceItem — Demo
// Shows a single service: its title, price (SAR) and category.

import React from "react";

export default function ServiceItem({ service }) {
  return (
    <div style={{ border: "1px solid #eee", padding: "8px", margin: "6px 0" }}>
      <strong>{service.title}</strong>
      <div>{service.category}</div>
      <div>{service.price} SAR</div>
    </div>
  );
}
