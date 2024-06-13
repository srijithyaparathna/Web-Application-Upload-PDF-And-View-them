const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

// Controller for user registration
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Check if user already exists
    const existingUser = await UserModel.findOne({
      $or: [{ email }, { name }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email or name already exists" });
    }

    // Hash the password
    const hash = await bcrypt.hash(password, 10);

    // Create the new user
    const user = await UserModel.create({ name, email, password: hash, role });
    res.json({ status: "OK" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controller for user login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await UserModel.findOne({ email: email });

    if (user) {
      // Compare the provided password with the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        // Generate a JWT token
        const token = jwt.sign(
          { email: user.email, role: user.role },
          "jwt-secret-key",
          { expiresIn: "1d" }
        );

        // Set the token as an HTTP-only cookie
        res.cookie("token", token, { httpOnly: true });
        return res.json({ status: "Success", role: user.role });
      } else {
        return res.status(401).json("The password is incorrect");
      }
    } else {
      return res.status(404).json("No record existed");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
