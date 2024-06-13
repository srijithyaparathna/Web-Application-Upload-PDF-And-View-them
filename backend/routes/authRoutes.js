const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const verifyUser = require("../middlewares/auth");

router.post("/register", registerUser);
router.post("/login",loginUser);

// Example of a protected route
router.get("/dashboard", verifyUser, (req, res) => {
  res.json({ message: "Success" });
});

module.exports = router;
