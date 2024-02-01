const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole, menu } = require("/controllers/prompts.js")

const userInput = inquirer.prompt([
    {
      type: 'input',
      message: 'What would you like to do?',
      name: 'userInput',
      choices: ["view all departments","view all roles","view all employees","add a department","add a role","add an employee","update an employee role"]
    },
])

switch (userInput){
    case 'view all departments': 
    return viewAllDepartments()
    case 'view all roles': 
    return viewAllRoles()
    case 'view all employees':
    return viewAllEmployees() 
    case 'add a department': 
    return addDepartment()
    case 'add a role': 
    return addRole()
    case 'add an employee': 
    return addEmployee()
    case 'update an employee role': 
    return updateEmployeeRole()
    case 'Main Menu':
    return menu()
};
