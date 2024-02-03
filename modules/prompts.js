const inquirer = require('inquirer');
const { viewAllDepartmentsQuery, viewAllRolesQuery, viewAllEmployeesQuery, addDepartmentQuery, addRoleQuery, addEmployeeQuery, updateEmployeeRoleQuery } = require('./sqlCommands')

const viewAllDepartments = async ()=>{
    try{
    const departmentsPrompt = await viewAllDepartmentsQuery();
    console.table(departmentsPrompt);
}catch(err){
    return menu()
}
}
const viewAllRoles = async ()=>{
    try{
    const departmentsPrompt = await viewAllRolesQuery();
    console.table(departmentsPrompt);
}catch(err){
    return menu()
}
}
const viewAllEmployees = async ()=>{
    try{
    const departmentsPrompt = await viewAllEmployeesQuery();
    console.table(departmentsPrompt);
}catch(err){
    return menu()
}
}
const addDepartment = async ()=>{
    const { add_Department } = await inquirer.prompt([
        {
            type: 'input',
            name: 'add_Department',
            message: 'Input department name:',
        },
    ])
    await addDepartmentQuery({ add_Department })
}
const addRole = async ()=>{
    const departmentForRole = await viewAllDepartmentsQuery()
    const { add_Role, add_Role_Salary, add_Role_Id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'add_Role',
            message: 'Input role name:',
        },
        {
            type: 'input',
            name: 'add_Role_Salary',
            message: 'Input role salary:',
        },
        {
            type: 'input',
            name: 'add_Role_Department',
            message: 'Choose department:',
            choices: departmentForRole.map((department) => ({
                name: department.name,
                value: department.id,
            }))
        },

    ])
    await addRoleQuery({ add_Role, add_Role_Salary, add_Role_Id })
}
const addEmployee = async ()=>{
    const roleForEmployee = await viewAllRolesQuery()
    const { add_Employee_FirstName, add_Employee_LastName, add_Employee_roleId,add_Employee_ManagerId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'add_Employee_FirstName',
            message: 'Input employees first name:',
        },
        {
            type: 'input',
            name: 'add_Employee_LastName',
            message: 'Input employees last name:',
        },
        {
            type: 'input',
            name: 'add_Employee_roleId',
            message: 'Choose employee role id:',
            choices: roleForEmployee.map((role) => ({
                name: role.name,
                value: role.id,
            }))
        },
        {
            type: 'input',
            name: 'add_Employee_ManagerId',
            message: 'Input employee manager id:',
        },
    ])
    await addEmployeeQuery({ add_Employee_FirstName, add_Employee_LastName, add_Employee_roleId,add_Employee_ManagerId })
}
const updateEmployeeRole = async ()=>{
    const viewEmployeeToUpdate = await viewAllEmployeesQuery()
    const roleForEmployee = await viewAllRolesQuery()
    const { select_employee, update_Employee_roleId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'select_employee',
            message: "Choose employee's role you would like to change:",
            choices: viewEmployeeToUpdate.map((employee) => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id,
            }))
        },
        {
            type: 'input',
            name: 'update_Employee_roleId',
            message: 'Choose employee role id:',
            choices: roleForEmployee.map((role) => ({
            name: role.name,
            value: role.id,
            }))
        },
    ])
    await updateEmployeeRoleQuery({ select_employee, update_Employee_roleId })
}

const menu = async (errorMessage = 'Error retrieving data table, press ENTER to return to main menu.') => {
  await inquirer.prompt([
    {
      type: 'input',
      name: 'menu',
      message: errorMessage,
      choices: ['Main menu'],
    },
  ]);
};

module.exports = { 
    viewAllDepartments,
    viewAllRoles, 
    viewAllEmployees, 
    addDepartment, 
    addRole, 
    addEmployee, 
    updateEmployeeRole, 
    menu 
};
