// Auth routes — Demo
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// POST /api/auth/login     → login with {phone}
// POST /api/auth/register  → register with {name,phone,role}
router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
