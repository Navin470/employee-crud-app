/********************************************************************
 * Employee Model
 *
 * This file contains all database queries.
 *
 * We will implement this after creating MySQL.
 ********************************************************************/

/**********************************************************************
 * Employee Model
 *
 * Handles all database operations.
 **********************************************************************/

const db = require("../config/db");

/**
 * Get all employees
 */
exports.getAllEmployees = async () => {

    const [rows] = await db.query("SELECT * FROM employees");

    return rows;
};

/**
 * Get employee by ID
 */
exports.getEmployeeById = async (id) => {

    const [rows] = await db.query(

        "SELECT * FROM employees WHERE id = ?",

        [id]

    );

    return rows[0];
};

/**
 * Create employee
 */
exports.createEmployee = async (employee) => {

    const sql = `
        INSERT INTO employees
        (name, email, department, designation, salary)
        VALUES (?, ?, ?, ?, ?)
    `;

    const values = [

        employee.name,

        employee.email,

        employee.department,

        employee.designation,

        employee.salary

    ];

    const [result] = await db.query(sql, values);

    return result;
};

/**
 * Update employee
 */
exports.updateEmployee = async (id, employee) => {

    const sql = `
        UPDATE employees
        SET
            name=?,
            email=?,
            department=?,
            designation=?,
            salary=?
        WHERE id=?
    `;

    const values = [

        employee.name,

        employee.email,

        employee.department,

        employee.designation,

        employee.salary,

        id

    ];

    const [result] = await db.query(sql, values);

    return result;
};

/**
 * Delete employee
 */
exports.deleteEmployee = async (id) => {

    const [result] = await db.query(

        "DELETE FROM employees WHERE id=?",

        [id]

    );

    return result;
};