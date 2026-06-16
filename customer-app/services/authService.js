// authService — Demo
// Login and register helpers for Haala customers (Saudi marketplace).

const BASE_URL = "http://localhost:5000/api";

// Login with a phone number → {token,customer:{id,name,phone}}
export async function login({ phone }) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone }),
  });
  return res.json();
}

// Register a new user → {token,customer:{id,name,phone,role}}
// role is usually "customer" but can be "vendor".
export async function register({ name, phone, role }) {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, role }),
  });
  return res.json();
}
