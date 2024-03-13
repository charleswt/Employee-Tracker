const {
  viewAllDepartments,
  viewAllRole, 
  viewAllEmployees, 
  addDepartment, 
  addRole, 
  addEmployee, 
  updateEmployeeRole
} = require('./modules/prompts');

const mainMenu = async () => {
  const { default: inquirer } = await import('inquirer')
  const userInput = await inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'userInput',
      choices: ["View all departments", "View all roles","View all employees","Add a department","Add a role","Add an employee","Update an employee role"]
    },
  ]);

  switch (userInput.userInput) {
    case 'View all departments': 
      await viewAllDepartments();
      mainMenu();
      break;
    case 'View all roles': 
      await viewAllRole();
      mainMenu();
      break;
    case 'View all employees':
      await viewAllEmployees();
      mainMenu();
      break;
    case 'Add a department': 
      await addDepartment();
      mainMenu();
      break;
    case 'Add a role': 
      await addRole();
      mainMenu();
      break;
    case 'Add an employee': 
      await addEmployee();
      mainMenu();
      break;
    case 'Update an employee role': 
      await updateEmployeeRole();
      mainMenu();
      break;
  }
};

mainMenu();

module.exports = { mainMenu }