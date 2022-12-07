//importing required files
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

//empty team array to push created team members into
const team = [];

//list of questions for manager
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

//list of questions for engineer
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

//list of questions for intern
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

//question for adding additional employees or stopping
const addEmployee = [
  {
    type: "list",
    message: "Would you like to add another employee?",
    choices: ["Add Engineer", "Add Intern", "None"],
    name: "action",
  },
];

//function to create new engineer
const addEngineer = async () => {
  var data = await inquirer.prompt(engineerQuestions);
  team.push(new Engineer(data.name, data.id, data.email, data.github));
  menu();
};

//function to create new intern
const addIntern = async () => {
  var data = await inquirer.prompt(internQuestions);
  team.push(new Intern(data.name, data.id, data.email, data.school));
  menu();
};

//function to allow user to select additional employees
const menu = async () => {
  var data = await inquirer.prompt(addEmployee);

  switch (data.action) {
    case "Add Engineer":
      addEngineer();
      break;
    case "Add Intern":
      addIntern();
      break;
    default:
      console.log(team);
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

//function to start initial questions
const ask = async () => {
  var data = await inquirer.prompt(managerQuestions);
  team.push(new Manager(data.name, data.id, data.email, data.officeNumber));
  menu();
};

ask();
