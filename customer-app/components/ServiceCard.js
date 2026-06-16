// ServiceCard — Demo
// Shows a single service (title, category, price in SAR) with an "open" action.

import React from "react";

export default function ServiceCard({ service, onOpen }) {
  return (
    <div style={{ border: "1px solid #eee", padding: "10px", margin: "6px 0" }}>
      <h3>{service.title}</h3>
      <p>Category: {service.category}</p>
      {/* Prices in the Saudi market are shown in SAR */}
      <p>{service.price} SAR</p>
      <button onClick={() => onOpen(service)}>Book this service</button>
    </div>
  );
}
