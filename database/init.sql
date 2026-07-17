/**********************************************************************
 * File Name : init.sql
 *
 * Purpose:
 *   Creates the Employee Management Database
 *   Creates Employees Table
 *   Inserts Sample Data
 **********************************************************************/

-- -----------------------------------------------------
-- Create Database
-- -----------------------------------------------------

CREATE DATABASE IF NOT EXISTS employee_db;

-- Select Database
USE employee_db;

-- -----------------------------------------------------
-- Create Employees Table
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS employees (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL UNIQUE,

    department VARCHAR(100) NOT NULL,

    designation VARCHAR(100) NOT NULL,

    salary DECIMAL(10,2) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- -----------------------------------------------------
-- Insert Sample Data
-- -----------------------------------------------------

INSERT INTO employees
(name, email, department, designation, salary)

VALUES

('Navin Raj',
 'navin@example.com',
 'DevOps',
 'DevOps Engineer',
 60000),

('Rahul Sharma',
 'rahul@example.com',
 'Development',
 'Software Engineer',
 70000),

('Priya Singh',
 'priya@example.com',
 'QA',
 'QA Engineer',
 50000);