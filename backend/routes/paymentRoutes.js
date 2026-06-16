// Payment routes — Demo
const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

// GET  /api/payments  → list all payments
// POST /api/payments  → record a payment {bookingId,amount,method}
router.get("/", paymentController.getPayments);
router.post("/", paymentController.createPayment);

module.exports = router;
