// bookingService — Demo
// Create and list service bookings for Haala customers.

const BASE_URL = "http://localhost:5000/api";

// Create a booking → {id,serviceId,customerId,date,status}
export async function createBooking({ serviceId, customerId, date }) {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ serviceId, customerId, date }),
  });
  return res.json();
}

// List all bookings → [ {id,serviceId,customerId,date,status} ]
export async function getBookings() {
  const res = await fetch(`${BASE_URL}/bookings`);
  return res.json();
}
