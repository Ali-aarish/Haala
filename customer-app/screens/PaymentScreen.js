// PaymentScreen — Demo
// Takes payment (in SAR) for a booking via mada/card/cash.

import React, { useState } from "react";
import { createPayment } from "../services/paymentService";

export default function PaymentScreen({ booking, service }) {
  const [method, setMethod] = useState("mada");
  const [paid, setPaid] = useState(null);

  // POST /payments using the booking id and the service price
  async function handlePay() {
    const result = await createPayment({
      bookingId: booking.id,
      amount: service.price,
      method,
    });
    setPaid(result);
  }

  if (paid) {
    return <p>Payment complete ✅ — thank you for using Haala!</p>;
  }

  return (
    <div>
      <h2>Payment</h2>
      <p>Amount: {service.price} SAR</p>
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="mada">mada</option>
        <option value="card">Card</option>
        <option value="cash">Cash</option>
      </select>
      <button onClick={handlePay}>Pay now</button>
    </div>
  );
}
