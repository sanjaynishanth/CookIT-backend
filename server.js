const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Configure CORS
app.use(cors({
    origin: "*",  // Allow all origins (you can replace * with your frontend URL)
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type",
}));

// Database Connection
connectDB();

// Routes
app.use("/api", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
