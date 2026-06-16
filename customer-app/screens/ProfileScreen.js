// ProfileScreen — Demo
// Shows the logged-in customer's profile (hardcoded demo data).

import React from "react";

export default function ProfileScreen() {
  // Demo customer — a real app would load this from authService
  const customer = {
    name: "Ahmad Al-Saud",
    phone: "+966 50 123 4567",
    city: "Riyadh",
  };

  return (
    <div>
      <h2>My Profile</h2>
      <p>Name: {customer.name}</p>
      <p>Phone: {customer.phone}</p>
      <p>City: {customer.city}</p>
    </div>
  );
}
