const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const logger = require("./middlewares/logger");
const morgan = require('morgan');
const pdfRoutes = require("./routes/pdfRoutes");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Use Logger 
app.use(morgan('combined', { stream: logger.stream }));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/auth", authRoutes); // Authentication routes
app.use('/pdf', pdfRoutes); // PDF routes

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
