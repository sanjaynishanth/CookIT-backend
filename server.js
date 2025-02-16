const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Improved CORS settings
app.use(cors({
    origin: "*", // Allows all domains
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));

// Database Connection
connectDB();

// Routes
app.use("/api", require("./routes/contactRoutes"));

// Wake-up route for Render (prevents server sleep issues)
app.get("/", (req, res) => {
    res.send("Backend is running...");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
