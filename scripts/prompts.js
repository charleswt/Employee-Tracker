const inquirer = require('inquirer');
const { viewAllDepartmentsQuery, viewAllRolesQuery, viewAllEmployeesQuery, addDepartmentQuery, addRoleQuery, addEmployeeQuery, updateEmployeeRoleQuery } = require('./scripts/sqlCommands')

viewAllDepartments = async ()=>{
    const departmentsPrompt = await viewAllDepartmentsQuery();
    console.log(departmentsPrompt);
    if(err){console.error(err, menu(menuPrompt.message = 'Error retrieving data table, press ENTER to return to the menu.'))}
}
viewAllRoles = async ()=>{
    const departmentsPrompt = await viewAllRolesQuery();
    console.log(departmentsPrompt);
    if(err){console.error(err, menu(menuPrompt.message = 'Error retrieving data table, press ENTER to return to the menu.'))}

}
viewAllEmployees = async ()=>{
    const departmentsPrompt = await viewAllEmployeesQuery();
    console.log(departmentsPrompt);
    if(err){console.error(err, menu(menuPrompt.message = 'Error retrieving data table, press ENTER to return to main menu.'))}
}
addDepartment = async ()=>{
    const { add_Department } = await inquirer.prompt([
        {
            type: 'input',
            name: 'add_Department',
            message: 'Input department name:',
        },
    ])
    await addDepartmentQuery({ add_Department })
}
addRole = async ()=>{
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
addEmployee = async ()=>{
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
updateEmployeeRole = async ()=>{
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
menu = ()=>{
    menuPrompt = inquirer.prompt([
        {
          type: 'input',
          name: 'menu',
          message,
          choice: [ 'Main menu' ]
        },
      ]);
}

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
