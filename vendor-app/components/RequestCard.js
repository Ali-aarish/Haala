// RequestCard — Demo
// Shows a booking request with an Accept button.

import React from "react";
import Button from "./Button";

export default function RequestCard({ request, onAccept }) {
  return (
    <div style={{ border: "1px solid #eee", padding: "8px", margin: "6px 0" }}>
      <strong>{request.service}</strong>
      <div>Customer: {request.customer}</div>
      <div>Status: {request.status}</div>
      {/* Only show Accept while the request is still pending */}
      {request.status === "pending" && (
        <Button label="Accept" onClick={() => onAccept(request.id)} />
      )}
    </div>
  );
}
