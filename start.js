const inquirer = require('inquirer');
const {
  viewAllDepartments,
  viewAllRoles, 
  viewAllEmployees, 
  addDepartment, 
  addRole, 
  addEmployee, 
  updateEmployeeRole, 
  menu 
} = require('./modules/prompts');

const mainMenu = async () => {
  const userInput = await inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'userInput',
      choices: ["View all departments","View all roles","View all employees","Add a department","Add a role","Add an employee","Update an employee role","Main Menu"]
    },
  ]);

  switch (userInput.userInput||menu.choices) {
    case 'View all departments': 
      viewAllDepartments();
      break;
    case 'View all roles': 
      viewAllRoles();
      break;
    case 'View all employees':
      viewAllEmployees();
      break;
    case 'Add a department': 
      addDepartment();
      break;
    case 'Add a role': 
      addRole();
      break;
    case 'Add an employee': 
      addEmployee();
      break;
    case 'Update an employee role': 
      updateEmployeeRole();
      break;
    case 'Main menu':
      mainMenu();
      break;
  }
};

mainMenu();