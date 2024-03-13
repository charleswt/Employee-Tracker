const inquirer = require('inquirer');
const {
  viewAllDepartments,
  viewAllRole, 
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
      choices: ["View all departments", "View all roles","View all employees","Add a department","Add a roles","Add an employee","Update an employee roles","Main Menu"]
    },
  ]);

  switch (userInput.userInput) {
    case 'View all departments': 
      viewAllDepartments();
      break;
    case 'View all roles': 
      viewAllRole();
      break;
    case 'View all employees':
      viewAllEmployees();
      break;
    case 'Add a department': 
      addDepartment();
      break;
    case 'Add a roles': 
      addRole();
      break;
    case 'Add an employee': 
      addEmployee();
      break;
    case 'Update an employee roles': 
      updateEmployeeRole();
      break;
    case 'Main menu':
      mainMenu();
      break;
  }
};

mainMenu();

module.exports = { mainMenu }
// ["View all departments","View all role","View all employees","Add a department","Add a role","Add an employee","Update an employee role","Main Menu"]