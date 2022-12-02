const inquirer = require('inquirer');

const managerQuestions = [{
    type: 'input',
    name: 'name',
    message: "What is the manager's name?"
}]

class AskQuestions {
    constructor(questions){
        this.questions = questions;
        this.data;
        this.prompt();
    }

    prompt() {
        inquirer.prompt(this.questions).then(answers => {
            this.data = answers
        })
    }
}