const { viewAllDepartmentsQuery, viewAllRoleQuery, viewAllEmployeesQuery, addDepartmentQuery, addRoleQuery, addEmployeeQuery, updateEmployeeRoleQuery } = require('./sqlCommands')

const viewAllDepartments = async ()=>{
    try{
    const departmentsPrompt = await viewAllDepartmentsQuery();
    console.table(departmentsPrompt)
}catch(e){
    console.log(e)
}
}
const viewAllRole = async ()=>{
    try{
    const rolePrompt = await viewAllRoleQuery();
    console.table(rolePrompt)
}catch(e){
    console.log(e)
}
}
const viewAllEmployees = async ()=>{
    try{
    const dEmployeesPrompt = await viewAllEmployeesQuery();
    console.table(dEmployeesPrompt);
}catch(e){
    console.log(e)
}
}
const addDepartment = async () => {
    try {
        const { default: inquirer } = await import('inquirer')
        const { add_Department } = await inquirer.prompt([
            {
                type: 'input',
                name: 'add_Department',
                message: 'Input department name:',
            },
        ]);
        
        await addDepartmentQuery(add_Department);
        console.table(await viewAllDepartments());
    } catch (e) {
        console.log(e);
    }
};
const addRole = async () => {
    try {
        const { default: inquirer } =  await import('inquirer');
        const departmentForRole = await viewAllDepartmentsQuery();
        
        const { add_Role, add_Role_Salary, add_Role_Department } = await inquirer.prompt([
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
                type: 'list',
                name: 'add_Role_Department',
                message: 'Choose department:',
                choices: departmentForRole.map((department) => ({
                    name: department.name,
                    value: department.id,
                }))
            },
        ]);
        
        await addRoleQuery(add_Role, add_Role_Salary, add_Role_Department);
        console.table(await viewAllRole());
    } catch (e) {
        console.log(e);
    }
};
const addEmployee = async ()=>{
    try{
        const { default: inquirer } = await import('inquirer')
    const roleForEmployee = await viewAllRoleQuery()
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
            type: 'list',
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
    await addEmployeeQuery(add_Employee_FirstName, add_Employee_LastName, add_Employee_roleId ,add_Employee_ManagerId)
    console.table(await viewAllEmployeesQuery())
}catch(e){
    console.log(e)
}
}
const updateEmployeeRole = async ()=>{
    try{
        const { default: inquirer } = await import('inquirer')
    const viewEmployeeToUpdate = await viewAllEmployeesQuery()
    const roleForEmployee = await viewAllRoleQuery()
    const { select_employee, update_Employee_roleId } = await inquirer.prompt([
        {
            type: 'list',
            name: 'select_employee',
            message: "Choose employee's role you would like to change:",
            choices: viewEmployeeToUpdate.map((employee) => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id,
            }))
        },
        {
            type: 'list',
            name: 'update_Employee_roleId',
            message: 'Choose employee role id:',
            choices: roleForEmployee.map((role) => ({
            name: role.name,
            value: role.id,
            }))
        },
    ])
    await updateEmployeeRoleQuery(select_employee, update_Employee_roleId)
    console.table(await viewAllEmployeesQuery())
}catch(e){
    console.log(e)
}
}

module.exports = { 
    viewAllDepartments,
    viewAllRole, 
    viewAllEmployees, 
    addDepartment, 
    addRole, 
    addEmployee, 
    updateEmployeeRole,
    viewAllRole, 
    viewAllEmployees, 
    addDepartment, 
    addRole, 
    addEmployee, 
    updateEmployeeRole
};
