// paymentService — Demo
// Records a payment (in SAR) for a completed booking.

const BASE_URL = "http://localhost:5000/api";

// Create a payment → {id,bookingId,amount,method,status}
// method is e.g. "mada", "card" or "cash".
export async function createPayment({ bookingId, amount, method }) {
  const res = await fetch(`${BASE_URL}/payments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bookingId, amount, method }),
  });
  return res.json();
}
