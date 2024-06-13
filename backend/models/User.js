// userModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true, // Ensure uniqueness of email
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    // Assuming there are only two roles: admin and visitor
    // Default role is set to 'visitor'
  },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
