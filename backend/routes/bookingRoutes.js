// Booking routes — Demo
const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// GET   /api/bookings      → list all bookings
// POST  /api/bookings      → create a booking {serviceId,customerId,date}
// PATCH /api/bookings/:id  → update status (requested→confirmed→in_progress→completed)
router.get("/", bookingController.getBookings);
router.post("/", bookingController.createBooking);
router.patch("/:id", bookingController.updateStatus);

module.exports = router;
