// API client — Demo
// A simple helper to read services from the Haala backend.

const BASE_URL = "http://localhost:5000/api";

// List all services → [ {id,title,price,category} ]
export async function getServices() {
  const res = await fetch(`${BASE_URL}/services`);
  return res.json();
}

// One service by id → {id,title,price,category,description}
export async function getService(id) {
  const res = await fetch(`${BASE_URL}/services/${id}`);
  return res.json();
}
