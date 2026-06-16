// bookingService — Demo
// Updates the status of a booking request (e.g. accept it).

const BASE_URL = "http://localhost:5000/api";

// Update a booking's status → PATCH /bookings/:id { status }
export async function updateStatus(id, status) {
  const res = await fetch(`${BASE_URL}/bookings/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return res.json();
}
