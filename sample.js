const inquirer = require('inquirer')

const managerQuestions = [
    {type: "input", name: "name", message: "What's the managers name?"}
]

class AskQuestions {
    constructor(questions){
        this.questions = questions
        this.data;
        this.prompt()
    }
    prompt (){
        inquirer.prompt(this.questions).then(answers =>{
            this.data = answers
        })
    }
}

async function askData() {
    
}
var managerPrompt = new AskQuestions(managerQuestions)
console.log(managerPrompt)