// authService — Demo
// Logs a vendor in with their phone number.

const BASE_URL = "http://localhost:5000/api";

// Login with a phone number → { token, vendor }
export async function login({ phone }) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone }),
  });
  return res.json();
}
