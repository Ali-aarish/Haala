// ProfileScreen — Demo
// Shows the logged-in vendor's profile details.

import React from "react";

export default function ProfileScreen() {
  // Demo vendor — in a real app this would come from authService
  const vendor = {
    name: "Noura Al-Qahtani",
    service: "AC Repair",
    city: "Riyadh",
    phone: "+966 50 123 4567",
    rating: 4.8,
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {vendor.name}</p>
      <p>Service: {vendor.service}</p>
      <p>City: {vendor.city}</p>
      <p>Phone: {vendor.phone}</p>
      <p>Rating: {vendor.rating} ⭐</p>
    </div>
  );
}
