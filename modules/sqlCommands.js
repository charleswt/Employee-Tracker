const sqlDb = require('../config/db.js');

const viewAllDepartmentsQuery = async () => {
  const query = 'SELECT * FROM department';
  try {
    const departments = await sqlDb.query(query);
    return console.log('Departments:', departments);
  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};

const viewAllRolesQuery = async () => {
  const query = 'SELECT * FROM role';
  try {
    const roles = await sqlDb.query(query);
    return console.log('Roles:', roles);
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
};

const viewAllEmployeesQuery = async () => {
  const query = 'SELECT * FROM employee';
  try {
    const employees = await sqlDb.query(query);
    console.log('Employees:', employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};

const addDepartmentQuery = async (add_Department) => {
    const query = 'INSERT INTO department SET ?';
  try {
    const result = await sqlDb.query(query, { name: add_Department });
    console.log('Department added successfully:', result);
  } catch (error) {
    console.error('Error adding department:', error);
  }
};

const addRoleQuery = async ({ add_Role, add_Role_Salary, add_Role_Id }) => {
    const query = 'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
  try {
    const result = await sqlDb.query(query, [add_Role, add_Role_Salary, add_Role_Id]);
    console.log('Role added successfully:', result);
  } catch (err) {
    console.error('Error adding role:', err);
  }
};

const addEmployeeQuery = async ({ add_Employee_FirstName, add_Employee_LastName, add_Employee_roleId, add_Employee_ManagerId }) => {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
  try {
    const result = await sqlDb.query(query, [add_Employee_FirstName, add_Employee_LastName, add_Employee_roleId, add_Employee_ManagerId]);
    console.log('Employee added successfully:', result);
  } catch (err) {
    console.error('Error adding employee:', err);
  }
};

const updateEmployeeRoleQuery = async ({ update_Employee_roleId, select_employee }) => {
    const query = 'UPDATE employees SET role_id = ? WHERE id = ?';
  try {
    const result = await sqlDb.query(query, [update_Employee_roleId, select_employee]);
    console.log('Employee role updated successfully:', result);
  } catch (err) {
    console.error('Error updating employee role:', err);
  }
};


module.exports = {
  viewAllDepartmentsQuery,
  viewAllRolesQuery,
  viewAllEmployeesQuery,
  addDepartmentQuery,
  addRoleQuery,
  addEmployeeQuery,
  updateEmployeeRoleQuery,
};