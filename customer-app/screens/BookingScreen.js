// BookingScreen — Demo
// Creates a booking for the chosen service, then moves on to payment.

import React, { useState } from "react";
import { createBooking } from "../services/bookingService";
import PaymentScreen from "./PaymentScreen";

export default function BookingScreen({ service, onBack }) {
  const [date, setDate] = useState("2026-06-20");
  const [booking, setBooking] = useState(null);

  // Demo customer id — in a real app this comes from the logged-in user
  const customerId = 1;

  // POST /bookings then advance to the payment step
  async function handleBook() {
    const result = await createBooking({
      serviceId: service.id,
      customerId,
      date,
    });
    setBooking(result);
  }

  // Once booked, show the payment screen for this booking
  if (booking) {
    return <PaymentScreen booking={booking} service={service} />;
  }

  return (
    <div>
      <button onClick={onBack}>← Back</button>
      <h2>Book: {service.title}</h2>
      <p>{service.price} SAR</p>
      <input value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleBook}>Confirm booking</button>
    </div>
  );
}
