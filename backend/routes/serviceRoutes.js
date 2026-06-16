// Service routes — Demo
const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

// GET  /api/services      → list all services
// GET  /api/services/:id  → one service
// POST /api/services      → add a service {title,price,vendorId,category}
router.get("/", serviceController.getServices);
router.get("/:id", serviceController.getService);
router.post("/", serviceController.addService);

module.exports = router;
