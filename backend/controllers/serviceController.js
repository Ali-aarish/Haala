// Service controller — Demo (in-memory sample data)

let services = [
  { id: 1, title: "Home Cleaning", price: 150, vendorId: 1, category: "Cleaning" },
  { id: 2, title: "AC Repair", price: 250, vendorId: 2, category: "AC" },
  { id: 3, title: "Plumbing Fix", price: 180, vendorId: 3, category: "Plumbing" },
];

// GET /api/services
exports.getServices = (req, res) => {
  res.json(services);
};

// GET /api/services/:id
exports.getService = (req, res) => {
  const service = services.find((s) => s.id === Number(req.params.id));
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.json(service);
};

// POST /api/services
exports.addService = (req, res) => {
  const { title, price, vendorId, category } = req.body;
  const newService = { id: services.length + 1, title, price, vendorId, category };
  services.push(newService);
  res.status(201).json(newService);
};
