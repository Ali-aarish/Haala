// DashboardScreen — Demo
// Quick summary: how many services, pending requests, and total earnings (SAR).

import React, { useEffect, useState } from "react";
import { getServices, getBookings } from "../services/apiClient";

export default function DashboardScreen() {
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);

  // Load the vendor's data when the dashboard opens
  useEffect(() => {
    getServices().then(setServices);
    getBookings().then(setBookings);
  }, []);

  // Count requests still waiting for the vendor to accept
  const pending = bookings.filter((b) => b.status === "pending").length;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Services offered: {services.length}</p>
      <p>Pending requests: {pending}</p>
      <p>Total bookings: {bookings.length}</p>
    </div>
  );
}
