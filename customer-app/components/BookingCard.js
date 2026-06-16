// BookingCard — Demo
// Shows one booking: the service, the chosen date and its status.

import React from "react";

export default function BookingCard({ booking }) {
  return (
    <div style={{ border: "1px solid #eee", padding: "10px", margin: "6px 0" }}>
      <h3>{booking.serviceTitle || `Service #${booking.serviceId}`}</h3>
      <p>Date: {booking.date}</p>
      {/* status is e.g. "pending", "confirmed", "completed" */}
      <p>Status: {booking.status}</p>
    </div>
  );
}
