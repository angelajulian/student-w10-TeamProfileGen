const inquirer = require("inquirer");
const employees = [];

const addEmployee = async function (role) {
  let newEmployee = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What is the full name of this ${role}?:`,
    },
    {
      type: "input",
      name: "id",
      message: `What is this ${role}'s employee id number?:`,
    },
    {
      type: "input",
      name: "email",
      message: `What is this ${role}'s company email?:`,
    },
    {
      type: "input",
      name: "github",
      message: "What is this engineer's github username?:",
      when: role === "Engineer",
    },
    {
      type: "input",
      name: "school",
      message: "What is the name of this intern's school?:",
      when: role === "Intern",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is this manager's office number?:",
      when: role === "Manager",
    },
  ]);
  newEmployee.role = role;
  console.log(newEmployee);
  employees.push(newEmployee);
  console.log(employees);
  continuePrompts();
};

const continuePrompts = async function () {
  let askAgain = await inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Would you like to add an employee to the list?",
      choices: ["Engineer", "Manager", "Intern", "I'm done"],
    },
  ]);
  if (askAgain.role === "I'm done") {
    console.log("done");
  } else {
    addEmployee(askAgain.role);
  }
};

continuePrompts();
