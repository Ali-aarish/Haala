// EarningsScreen — Demo
// Shows total earnings (SAR) summed from the vendor's payments.

import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5000/api";

export default function EarningsScreen() {
  const [payments, setPayments] = useState([]);

  // Load payments when the screen opens
  useEffect(() => {
    fetch(`${BASE_URL}/payments`)
      .then((res) => res.json())
      .then(setPayments);
  }, []);

  // Sum up all payment amounts for the total
  const total = payments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div>
      <h2>Earnings</h2>
      <p>Payments received: {payments.length}</p>
      <p>Total earnings: {total} SAR</p>
    </div>
  );
}
