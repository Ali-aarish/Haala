// Vendor routes — Demo
const express = require("express");
const router = express.Router();
const vendorController = require("../controllers/vendorController");

// GET  /api/vendors  → list all service providers
// POST /api/vendors  → add a new provider
router.get("/", vendorController.getVendors);
router.post("/", vendorController.addVendor);

module.exports = router;
