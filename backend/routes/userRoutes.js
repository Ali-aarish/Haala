// User routes — Demo
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET  /api/users  → list all users
// POST /api/users  → add a new user
router.get("/", userController.getUsers);
router.post("/", userController.addUser);

module.exports = router;
