// userService — Demo
// Read and create users (customers / vendors) in the Haala marketplace.

const BASE_URL = "http://localhost:5000/api";

// List all users → [ {id,name,phone,role} ]
export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
}

// Create a new user.
// Demo usage: addUser({ name: "Noura", phone: "+966500000002", role: "customer" })
export async function addUser({ name, phone, role }) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, role }),
  });
  return res.json();
}
