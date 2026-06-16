// API client — Demo
// Simple read helpers for the Haala vendor backend.

const BASE_URL = "http://localhost:5000/api";

// List all services this vendor offers → [ {id,title,price,category,vendorId} ]
export async function getServices() {
  const res = await fetch(`${BASE_URL}/services`);
  return res.json();
}

// List all booking requests → [ {id,service,customer,status,date} ]
export async function getBookings() {
  const res = await fetch(`${BASE_URL}/bookings`);
  return res.json();
}
