const inquirer = require("inquirer");

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

class AskQuestions {
  constructor(questions) {
    this.questions = questions;
    this.data;
    this.prompt();
  }

  prompt() {
    inquirer.prompt(this.questions).then((answers) => {
      this.data = answers;
      this.info();
    });
  }

  info() {
    return this.data;
  }
}

const ask = () => {
   const managerPrompt = new AskQuestions(managerQuestions);
   managerPrompt.data.name 
};

ask()
