// Vendor controller — Demo (in-memory sample providers)

let vendors = [
  { id: 1, name: "Sparkle Home Services", category: "Cleaning", rating: 4.7, city: "Riyadh", verified: true },
  { id: 2, name: "CoolAir Experts", category: "AC", rating: 4.5, city: "Jeddah", verified: true },
  { id: 3, name: "Noura Plumbing Co.", category: "Plumbing", rating: 4.8, city: "Dammam", verified: false },
];

// GET /api/vendors
exports.getVendors = (req, res) => {
  res.json(vendors);
};

// POST /api/vendors
exports.addVendor = (req, res) => {
  const { name, category, city } = req.body;
  const newVendor = { id: vendors.length + 1, name, category, rating: 0, city, verified: false };
  vendors.push(newVendor);
  res.status(201).json(newVendor);
};
