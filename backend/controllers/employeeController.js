/**********************************************************************
 * File Name : employeeController.js
 *
 * Purpose:
 * Handles all business logic for Employee CRUD operations.
 *
 * Responsibilities:
 *  - Receive HTTP requests
 *  - Call Model functions
 *  - Handle errors
 *  - Return JSON responses
 **********************************************************************/

// Import Employee Model
const employeeModel = require("../models/employeeModel");

/**
 * GET /employees
 * Fetch all employees
 */
exports.getAllEmployees = async (req, res) => {

    try {

        const employees = await employeeModel.getAllEmployees();

        res.status(200).json({
            success: true,
            count: employees.length,
            data: employees
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch employees"
        });

    }

};


/**
 * GET /employees/:id
 * Fetch one employee
 */
exports.getEmployeeById = async (req, res) => {

    try {

        const employee = await employeeModel.getEmployeeById(req.params.id);

        if (!employee) {

            return res.status(404).json({

                success: false,
                message: "Employee not found"

            });

        }

        res.status(200).json({

            success: true,

            data: employee

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};


/**
 * POST /employees
 * Create employee
 */
exports.createEmployee = async (req, res) => {

    try {

        const employee = req.body;

        await employeeModel.createEmployee(employee);

        res.status(201).json({

            success: true,

            message: "Employee Created Successfully"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Unable to create employee"

        });

    }

};


/**
 * PUT /employees/:id
 * Update employee
 */
exports.updateEmployee = async (req, res) => {

    try {

        const employee = req.body;

        const result = await employeeModel.updateEmployee(

            req.params.id,

            employee

        );

        if (result.affectedRows === 0) {

            return res.status(404).json({

                success: false,

                message: "Employee not found"

            });

        }

        res.status(200).json({

            success: true,

            message: "Employee Updated"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Update Failed"

        });

    }

};


/**
 * DELETE /employees/:id
 * Delete employee
 */
exports.deleteEmployee = async (req, res) => {

    try {

        const result = await employeeModel.deleteEmployee(

            req.params.id

        );

        if (result.affectedRows === 0) {

            return res.status(404).json({

                success: false,

                message: "Employee not found"

            });

        }

        res.status(200).json({

            success: true,

            message: "Employee Deleted"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Delete Failed"

        });

    }

};