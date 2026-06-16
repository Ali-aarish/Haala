// Booking controller — Demo (in-memory sample data)

const sendNotification = require("../utils/sendNotification");

let bookings = [
  { id: 1, serviceId: 1, customerId: 1, date: "2026-06-20", status: "confirmed" },
];

// GET /api/bookings
exports.getBookings = (req, res) => {
  res.json(bookings);
};

// POST /api/bookings
exports.createBooking = (req, res) => {
  const { serviceId, customerId, date } = req.body;
  const newBooking = {
    id: bookings.length + 1,
    serviceId,
    customerId,
    date,
    status: "requested", // requested → confirmed → in_progress → completed
  };
  bookings.push(newBooking);
  sendNotification(customerId, "Your Haala booking has been requested ✅");
  res.status(201).json(newBooking);
};

// PATCH /api/bookings/:id  (move along the status flow)
exports.updateStatus = (req, res) => {
  const booking = bookings.find((b) => b.id === Number(req.params.id));
  if (!booking) return res.status(404).json({ message: "Booking not found" });
  booking.status = req.body.status || booking.status;
  res.json(booking);
};
