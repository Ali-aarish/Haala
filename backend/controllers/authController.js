// Auth controller — Demo (no real auth)

// POST /api/auth/login  → { token, user }
exports.login = (req, res) => {
  const { phone } = req.body;
  const user = { id: 1, name: "Ahmad", phone, role: "customer" };
  res.json({ token: `haala-demo-${phone}`, user });
};

// POST /api/auth/register  → { token, user }
exports.register = (req, res) => {
  const { name, phone, role } = req.body;
  const user = { id: 2, name, phone, role: role || "customer" };
  res.status(201).json({ token: `haala-demo-${phone}`, user });
};
