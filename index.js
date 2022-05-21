const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

const ManagerQuestions = [
    {
        type: 'input',
        name: 'manager name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'employee id',
        message: 'What is your employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'office number',
        message: 'What is your office number?',
    },
    {
        type: 'list',
        name: 'add more employees',
        message: "Would you like to add more to your list?",
        choices: ["Engineer", "Intern", "I'm done"]
    },

];

function init() {
    inquirer.prompt(ManagerQuestions).then((responses)=>{
        console.log(responses)
        let manager = new Manager()

    })
}
init();