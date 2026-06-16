// authService — Demo
// Handles admin login against the Haala backend.

const BASE_URL = "http://localhost:5000/api";

// Log in with a Saudi phone number → { token, admin:{name} }
// Demo usage: login({ phone: "+966500000001" })
export async function login({ phone }) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone }),
  });
  return res.json();
}
