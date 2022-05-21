const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const ManagerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What is your employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
    },
    

];

const EngineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineers name?',
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What is your employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
    },
    
];

const InternQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the interns name?',
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What is your employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the interns school?',
    },
   

];
const addMoreQuestions = [
    {
        type: 'list',
        name: 'addMoreEmployees',
        message: "Would you like to add more to your list?",
        choices: ["Engineer", "Intern", "I'm done"]
    },
];

let Engineers = [];
let Interns = [];
function init() {
    inquirer.prompt(ManagerQuestions).then((responses)=>{
        //console.log(responses)
        let manager = new Manager(responses.managerName, responses.employeeId, responses.email, responses.officeNumber)
        console.log(manager)
        if (responses.addMoreEmployees === "Engineer") {
            inquirer.prompt(EngineerQuestions).then((responses)=>{
                let engineer = new Engineer(responses.engineerName, responses.employeeId, responses.email, responses.github)
                Engineers.push(engineer)
                console.log(Engineers)

            })
        
        } else if (responses.addMoreEmployees === "Intern") {
            inquirer.prompt(InternQuestions).then((responses)=>{
                let intern = new Intern(responses.internName, responses.employeeId, responses.email, responses.school)
                Interns.push(intern)
                console.log(Interns)
            
        })
    }
    })

}
init();