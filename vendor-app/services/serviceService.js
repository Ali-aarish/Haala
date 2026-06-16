// serviceService — Demo
// Lets a vendor add a new service to their catalogue.

const BASE_URL = "http://localhost:5000/api";

// Add a service → { id, title, price, vendorId, category }
export async function addService({ title, price, vendorId, category }) {
  const res = await fetch(`${BASE_URL}/services`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, price, vendorId, category }),
  });
  return res.json();
}
