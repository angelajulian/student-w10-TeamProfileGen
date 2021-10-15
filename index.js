const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const HTMLgenerator = require("./src/html-generator");

const pathDir = path.resolve(__dirname, "dist");
const htmlFile = path.join(pathDir, "index.html");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

inquirer.registerPrompt("search-list", require("inquirer-search-list"));

let employees = [];
let objEmployees = [];

const addEmployee = async function (role) {
  const managers = employees.filter((obj) => obj.role === "Manager");
  if (!managers.includes("no manager")) {
    managers.push("no manager");
  }
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
    {
      type: "search-list",
      name: "manager",
      message: "Who is this employee's manager? ",
      when: role != "Manager",
      choices: managers,
    },
  ]);
  newEmployee.role = role;
  //   console.log(newEmployee);
  employees.push(newEmployee);
  console.log(employees);
  continuePrompts();
};

const generatePage = function () {
  fs.writeFileSync(htmlFile, HTMLgenerator(objEmployees), "utf-8");
};

const setObj = async function (teamList) {
  let newTeamList = [];
  for (i = 0; i < teamList.length; i++) {
    let employee;
    let teamI = teamList[i];
    if (teamI.role === "Manager") {
      employee = await new Manager(
        teamI.name,
        teamI.id,
        teamI.email,
        teamI.officeNumber
      );
    } else if (teamI.role === "Engineer") {
      employee = await new Engineer(
        teamI.name,
        teamI.id,
        teamI.email,
        teamI.github,
        teamI.manager
      );
    } else if (teamI.role === "Intern") {
      employee = await new Intern(
        teamI.name,
        teamI.id,
        teamI.email,
        teamI.school,
        teamI.manager
      );
    }
    await newTeamList.push(employee);
  }
  console.log(newTeamList);
  return newTeamList;
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
    if (employees.length === 0) {
      console.log("No HTML page generated.");
    } else {
      objEmployees = await setObj(employees);
      await generatePage();
      console.log("done");
    }
  } else {
    await addEmployee(askAgain.role);
  }
};

continuePrompts();
