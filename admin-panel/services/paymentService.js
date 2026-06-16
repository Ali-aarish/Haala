// paymentService — Demo
// Reads payment records (amounts in SAR) from the Haala backend.

const BASE_URL = "http://localhost:5000/api";

// List all payments → [ {id,amount,method,status} ]
// method is e.g. "mada", "Apple Pay", "Cash"
export async function getPayments() {
  const res = await fetch(`${BASE_URL}/payments`);
  return res.json();
}
