// BookingRequestsScreen — Demo
// Shows incoming booking requests and lets the vendor accept them.

import React, { useEffect, useState } from "react";
import { getBookings } from "../services/apiClient";
import { updateStatus } from "../services/bookingService";
import RequestCard from "../components/RequestCard";

export default function BookingRequestsScreen() {
  const [bookings, setBookings] = useState([]);

  // Load booking requests when the screen opens
  useEffect(() => {
    getBookings().then(setBookings);
  }, []);

  // Accept a request → mark it confirmed, then refresh the list
  async function handleAccept(id) {
    await updateStatus(id, "confirmed");
    getBookings().then(setBookings);
  }

  return (
    <div>
      <h2>Booking Requests</h2>
      {bookings.map((b) => (
        <RequestCard key={b.id} request={b} onAccept={handleAccept} />
      ))}
    </div>
  );
}
