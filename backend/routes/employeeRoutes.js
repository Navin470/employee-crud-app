/********************************************************************
 * File Name : employeeRoutes.js
 *
 * Purpose :
 * Define all Employee API endpoints.
 ********************************************************************/

const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employeeController");

// Get All Employees
router.get("/", employeeController.getAllEmployees);

// Get Employee By ID
router.get("/:id", employeeController.getEmployeeById);

// Create Employee
router.post("/", employeeController.createEmployee);

// Update Employee
router.put("/:id", employeeController.updateEmployee);

// Delete Employee
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;