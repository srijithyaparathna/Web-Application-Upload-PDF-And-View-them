const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }
  jwt.verify(token, "jwt-secret-key", (err, decode) => {
    if (err) {
      return res.status(403).json({ message: "Error with token" });
    }
    if (decode.role === "admin") {
      next();
    } else {
      return res.status(403).json({ message: "Not admin" });
    }
  });
};

module.exports = verifyUser;


// authMiddleware.js

