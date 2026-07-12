/********************************************************************
 * File Name : app.js
 *
 * Purpose :
 * Main entry point of the Employee Management Backend.
 *
 * Responsibilities
 * ----------------
 * 1. Create Express Server
 * 2. Enable JSON parsing
 * 3. Enable CORS
 * 4. Register Routes
 * 5. Start Server
 ********************************************************************/

// Import Express Framework
const express = require("express");

// Import CORS Middleware
const cors = require("cors");

// Import Employee Routes
const employeeRoutes = require("./routes/employeeRoutes");

// Create Express Application
const app = express();

// Port Number
const PORT = 5000;

// Middleware
// Parses incoming JSON requests
app.use(express.json());

// Allow requests from frontend
app.use(cors());

// Register Routes
app.use("/employees", employeeRoutes);

// Home Route
app.get("/", (req, res) => {

    res.json({
        message: "Employee Management API is Running"
    });

});

// Start Server
app.listen(PORT, () => {

    console.log("------------------------------------");
    console.log(`Server Started on Port ${PORT}`);
    console.log("------------------------------------");

});