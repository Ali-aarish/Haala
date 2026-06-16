// Payment controller — Demo (in-memory sample data)

let payments = [
  { id: 1, bookingId: 1, amount: 150, method: "mada", status: "paid" },
];

// GET /api/payments
exports.getPayments = (req, res) => {
  res.json(payments);
};

// POST /api/payments
exports.createPayment = (req, res) => {
  const { bookingId, amount, method } = req.body;
  const newPayment = {
    id: payments.length + 1,
    bookingId,
    amount, // in SAR
    method: method || "mada", // mada / card / cash / applepay
    status: "paid",
  };
  payments.push(newPayment);
  res.status(201).json(newPayment);
};
