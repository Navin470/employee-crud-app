/********************************************************************
 * File Name : db.js
 *
 * Purpose :
 * Create MySQL Database Connection.
 ********************************************************************/

const mysql = require("mysql2");

// Create Database Connection
const connection = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "root",

    database: "employee_db"

});

// Connect to Database
connection.connect((error) => {

    if (error) {

        console.log("Database Connection Failed");

        console.log(error);

        return;

    }

    console.log("Connected to MySQL Database");

});

module.exports = connection;