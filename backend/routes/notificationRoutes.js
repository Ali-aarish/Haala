// Notification routes — Demo
const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

// GET /api/notifications  → list notifications / reminders
router.get("/", notificationController.getNotifications);

module.exports = router;
