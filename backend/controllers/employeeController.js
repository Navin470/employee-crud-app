/********************************************************************
 * Employee Controller
 *
 * Handles Business Logic
 ********************************************************************/

exports.getAllEmployees = (req, res) => {

    res.json({

        success: true,

        message: "Get All Employees",

        data: []

    });

};

exports.getEmployeeById = (req, res) => {

    res.json({

        success: true,

        message: `Employee ID : ${req.params.id}`

    });

};

exports.createEmployee = (req, res) => {

    res.json({

        success: true,

        message: "Employee Created",

        employee: req.body

    });

};

exports.updateEmployee = (req, res) => {

    res.json({

        success: true,

        message: `Employee Updated ${req.params.id}`

    });

};

exports.deleteEmployee = (req, res) => {

    res.json({

        success: true,

        message: `Employee Deleted ${req.params.id}`

    });

};