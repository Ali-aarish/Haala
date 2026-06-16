// User controller — Demo (in-memory sample data)

let users = [
  { id: 1, name: "Ahmad", phone: "0551112233", role: "customer", city: "Riyadh" },
  { id: 2, name: "Noura", phone: "0554445566", role: "vendor", city: "Jeddah" },
  { id: 3, name: "Saeed", phone: "0557778899", role: "customer", city: "Dammam" },
];

// GET /api/users
exports.getUsers = (req, res) => {
  res.json(users);
};

// POST /api/users
exports.addUser = (req, res) => {
  const { name, phone, role } = req.body;
  const newUser = { id: users.length + 1, name, phone, role: role || "customer", city: "Riyadh" };
  users.push(newUser);
  res.status(201).json(newUser);
};
