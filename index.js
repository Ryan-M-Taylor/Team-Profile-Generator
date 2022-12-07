const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

const team = [];
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the office number?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is their GitHub username?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the Intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email?",
  },
  {
    type: "input",
    name: "school",
    message: "What school do they go to?",
  },
];

const addEmployee = [
  {
    type: "list",
    message: "Would you like to add another employee?",
    choices: ["Add Engineer", "Add Intern", "None"],
    name: "action",
  },
];

const addEngineer = async () => {
  var data = await inquirer.prompt(engineerQuestions);
  team.push(new Engineer(data.name, data.id, data.email, data.github));
  menu();
};
const addIntern = async () => {
  var data = await inquirer.prompt(internQuestions);
  team.push(new Intern(data.name, data.id, data.email, data.school));
  menu();
};

const menu = async () => {
  var data = await inquirer.prompt(addEmployee)
  //ask if add engineer, intern, or stop
  console.log("in the menu");

  switch (data.action) {
    case "Add Engineer":
      addEngineer();
      break;
    case "Add Intern":
      addIntern();
      break;
    default:
      console.log(team)
      fs.writeFile("./dist/index.html", generateHtml(team), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Your index file has been written", team);
        }
      });
      break;
  }
};

const ask = async () => {
  console.log("Asking");
  var data = await inquirer.prompt(managerQuestions);
  team.push(new Manager(data.name, data.id, data.email, data.officeNumber));
  menu();
};

ask();
