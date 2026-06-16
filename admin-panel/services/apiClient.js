// apiClient — Demo
// Simple fetch helpers to read marketplace data from the Haala backend.

const BASE_URL = "http://localhost:5000/api";

// List all customers/users → [ {id,name,phone,role} ]
export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
}

// List all vendors / service providers → [ {id,name,category,rating} ]
export async function getVendors() {
  const res = await fetch(`${BASE_URL}/vendors`);
  return res.json();
}

// List all services → [ {id,title,price,category} ] (price in SAR)
export async function getServices() {
  const res = await fetch(`${BASE_URL}/services`);
  return res.json();
}

// List all bookings → [ {id,customer,service,status} ]
export async function getBookings() {
  const res = await fetch(`${BASE_URL}/bookings`);
  return res.json();
}

// List all payments → [ {id,amount,method,status} ] (amount in SAR)
export async function getPayments() {
  const res = await fetch(`${BASE_URL}/payments`);
  return res.json();
}
