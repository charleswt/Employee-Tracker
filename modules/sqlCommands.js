const sqlDb = require('../config/db.js');

const viewAllDepartmentsQuery = async () => {
  const query = 'SELECT id, name FROM department';
  try {
    const departments = await sqlDb.query(query);
    return departments;
  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};

const viewAllRoleQuery = async () => {
  const query = 'SELECT role.id, role.title, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id;';
  try {
    const role = await sqlDb.query(query);
    return role;
  } catch (error) {
    console.error('Error fetching role:', error);
  }
};

const viewAllEmployeesQuery = async () => {
  const query = 'SELECT * FROM employee';
  try {
    const employees = await sqlDb.query(query);
    return employees;
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};

const addDepartmentQuery = async (add_Department) => {
    const query = 'INSERT INTO department SET ?';
  try {
    const addDepartment = await sqlDb.query(query, { name: add_Department });
    return addDepartment;
  } catch (error) {
    console.error('Error adding department:', error);
  }
};

const addRoleQuery = async ({ add_Role, add_Role_Salary, add_Role_Id }) => {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
  try {
    const addRole = await sqlDb.query(query, [add_Role, add_Role_Salary, add_Role_Id]);
    return addRole;
  } catch (err) {
    console.error('Error adding role:', err);
  }
};

const addEmployeeQuery = async ({ add_Employee_FirstName, add_Employee_LastName, add_Employee_roleId, add_Employee_ManagerId }) => {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
  try {
    const addEmployee = await sqlDb.query(query, [add_Employee_FirstName, add_Employee_LastName, add_Employee_roleId, add_Employee_ManagerId]);
    return addEmployee;
  } catch (err) {
    console.error('Error adding employee:', err);
  }
};

const updateEmployeeRoleQuery = async ({ update_Employee_roleId, select_employee }) => {
    const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
  try {
    const updateEmployee = await sqlDb.query(query, [update_Employee_roleId, select_employee]);
    return updateEmployee;
  } catch (err) {
    console.error('Error updating employee role:', err);
  }
};

module.exports = {
  viewAllDepartmentsQuery,
  viewAllRoleQuery,
  viewAllEmployeesQuery,
  addDepartmentQuery,
  addRoleQuery,
  addEmployeeQuery,
  updateEmployeeRoleQuery,
};