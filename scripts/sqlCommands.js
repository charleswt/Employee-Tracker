const sqlDb = require('./config/db');

const viewAllDepartmentsQuery = async () => {
  const query = 'SELECT * FROM department';
  try {
    const departments = await sqlDb.executeQuery(query);
    console.log('Departments:', departments);
  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};

const viewAllRolesQuery = async () => {
  const query = 'SELECT * FROM role';
  try {
    const roles = await sqlDb.executeQuery(query);
    console.log('Roles:', roles);
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
};

const viewAllEmployeesQuery = async () => {
  const query = 'SELECT * FROM employee';
  try {
    const employees = await sqlDb.executeQuery(query);
    console.log('Employees:', employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};

const addDepartmentQuery = async (add_Department) => {
    const query = 'INSERT INTO department SET ?';
  try {
    const result = await sqlDb.executeQuery(query, { name: add_Department });
    console.log('Department added successfully:', result);
  } catch (error) {
    console.error('Error adding department:', error);
  }
};

const addRoleQuery = async ({ add_Role, add_Role_Salary, add_Role_Id }) => {
    const query = 'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
  try {
    const result = await sqlDb.executeQuery(query, { add_Role, add_Role_Salary, add_Role_Id });
    console.log('Role added successfully:', result);
  } catch (error) {
    console.error('Error adding department:', error);
  }
};

const addEmployeeQuery = async (add_Employee) => {
    const query = '';
  try {
    const result = await sqlDb.executeQuery(query,);
    console.log('Employee added successfully:', result);
  } catch (error) {
    console.error('Error adding department:', error);
  }
};

const updateEmployeeRoleQuery = async () => {
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