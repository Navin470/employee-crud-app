/**********************************************************************
 * Employee Management Frontend
 *
 * Handles:
 * - Load Employees
 * - Add Employee
 * - Update Employee
 * - Delete Employee
 * - Edit Employee
 **********************************************************************/

const API_URL = "http://localhost:5000/employees";

let editingEmployeeId = null;
let employees = [];

// ======================================================
// Load Employees
// ======================================================

async function loadEmployees() {

    const response = await fetch(API_URL);
    const result = await response.json();

    employees = result.data;

    const table = document.getElementById("employeeTable");

    table.innerHTML = "";

    result.data.forEach(employee => {

        table.innerHTML += `
        <tr>

            <td>${employee.id}</td>

            <td>${employee.name}</td>

            <td>${employee.email}</td>

            <td>${employee.department}</td>

            <td>${employee.designation}</td>

            <td>${employee.salary}</td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editEmployee(${employee.id})">

                    Edit

                </button>

                <button
                    class="delete-btn"
                    onclick="deleteEmployee(${employee.id})">

                    Delete

                </button>

            </td>

        </tr>
        `;

    });

}

// ======================================================
// Search Employee
// ======================================================

document.getElementById("search")
.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    const filteredEmployees = employees.filter(employee => {

        return (

            employee.name.toLowerCase().includes(keyword) ||

            employee.email.toLowerCase().includes(keyword) ||

            employee.department.toLowerCase().includes(keyword) ||

            employee.designation.toLowerCase().includes(keyword)

        );

    });

    renderTable(filteredEmployees);

});

// ======================================================
// Add / Update Employee
// ======================================================

document
.getElementById("employeeForm")
.addEventListener("submit", async function (event) {

    event.preventDefault();

    const employee = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        department: document.getElementById("department").value,

        designation: document.getElementById("designation").value,

        salary: document.getElementById("salary").value

    };

    let method = "POST";
    let url = API_URL;

    if (editingEmployeeId !== null) {

        method = "PUT";
        url = API_URL + "/" + editingEmployeeId;

    }

    await fetch(url, {

        method: method,

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(employee)

    });

    showMessage(

        editingEmployeeId === null
            ? "Employee Added Successfully"
            : "Employee Updated Successfully",

        "success"

    );

    editingEmployeeId = null;

    this.reset();

    document.getElementById("submitBtn").innerText = "Add Employee";

    document.getElementById("cancelBtn").style.display = "none";

    loadEmployees();

});

// ======================================================
// Delete Employee
// ======================================================

async function deleteEmployee(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) {

        return;

    }

    await fetch(API_URL + "/" + id, {

        method: "DELETE"

    });

    showMessage(

        "Employee Deleted Successfully",

        "success"

    );

    loadEmployees();

}

// ======================================================
// Edit Employee
// ======================================================

function editEmployee(id) {

    const employee = employees.find(emp => emp.id == id);

    document.getElementById("name").value = employee.name;

    document.getElementById("email").value = employee.email;

    document.getElementById("department").value = employee.department;

    document.getElementById("designation").value = employee.designation;

    document.getElementById("salary").value = employee.salary;

    editingEmployeeId = id;

    document.getElementById("submitBtn").innerText = "Update Employee";

    document.getElementById("cancelBtn").style.display = "inline-block";

}

// ======================================================
// Cancel Editing
// ======================================================

document
.getElementById("cancelBtn")
.addEventListener("click", function () {

    editingEmployeeId = null;

    document.getElementById("employeeForm").reset();

    document.getElementById("submitBtn").innerText = "Add Employee";

    this.style.display = "none";

});

// ======================================================
// Show Message
// ======================================================

function showMessage(message, type) {

    const div = document.getElementById("message");

    div.style.display = "block";

    div.innerHTML = message;

    div.className = type;

    setTimeout(() => {

        div.innerHTML = "";

        div.className = "";

        div.style.display = "none";

    }, 3000);

}

function renderTable(employeeList) {

    const table = document.getElementById("employeeTable");

    table.innerHTML = "";

    employeeList.forEach(employee => {

        table.innerHTML += `

        <tr>

            <td>${employee.id}</td>

            <td>${employee.name}</td>

            <td>${employee.email}</td>

            <td>${employee.department}</td>

            <td>${employee.designation}</td>

            <td>${employee.salary}</td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editEmployee(${employee.id})">

                    Edit

                </button>

                <button
                    class="delete-btn"
                    onclick="deleteEmployee(${employee.id})">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

}


// ======================================================
// Initial Load
// ======================================================

loadEmployees();