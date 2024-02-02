const inquirer = require('inquirer');
const { viewAllDepartmentsQuery, viewAllRolesQuery, viewAllEmployeesQuery, addDepartmentQuery, addRoleQuery, addEmployeeQuery, updateEmployeeRoleQuery } = require('./scripts/sqlCommands')

viewAllDepartments = async ()=>{
    const departmentsPrompt = await viewAllDepartmentsQuery();
    console.table(departmentsPrompt);
    if(err){console.error(err, menu(menuPrompt.message = 'Error retrieving data table, press ENTER to return to the menu.'))}
}
viewAllRoles=async ()=>{
    const departmentsPrompt = await viewAllRolesQuery();
    console.table(departmentsPrompt);
    if(err){console.error(err, menu(menuPrompt.message = 'Error retrieving data table, press ENTER to return to the menu.'))}

}
viewAllEmployees = async ()=>{
    const departmentsPrompt = await viewAllEmployeesQuery();
    console.table(departmentsPrompt);
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
            message: 'Select department:',
            choices: departmentForRole.map((department) => ({
                name: department.name,
                value: department.id,
            }))
        },

    ])
    await addRoleQuery({ add_Role, add_Role_Salary, add_Role_Id })
}
addEmployee = async ()=>{
    const { add_Department } = await inquirer.prompt([
        {
            type: 'input',
            name: 'add_Department',
            message: 'Input department name:',
        },
    ])
    await addRoleQuery({ add_Department })
}
updateEmployeeRole = async ()=>{

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