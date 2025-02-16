const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

// Correct CORS Middleware
app.use(cors({
    origin: ["http://localhost:5174", "https://cookit-82lj.onrender.com"], // Allow local & deployed frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true // Allow cookies/auth headers if needed
}));

// Handle Preflight Requests (OPTIONS)
app.options("*", cors());

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
