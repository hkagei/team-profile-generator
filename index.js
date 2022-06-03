const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist");
const DIST_PATH = path.join(DIST_DIR, "team.html");
const render = require("./src/template.js");
const allMembers = [];
const idArray = [];

function myApp() {
  function ManagerQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is your name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is your employee ID?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is your email address?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is your office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.officeNumber
        );
        allMembers.push(manager);
        idArray.push(answers.managerId);
        buildTeam();
      });
  }

  function buildTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeChoice",
          message: "Which team member or employee type would you like to add?",
          choices: ["Intern", "Engineer", "None"],
        },
      ])
      .then((clientChoices) => {
        switch (clientChoices.employeeChoice) {
          case "Engineer":
            EngineerQuestions();
            break;
          case "Intern":
            InternQuestions();
            break;
          default:
            makeTeam();
        }
      });
  }

  function EngineerQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineers name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is your employee ID?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your email address?",
        },
        {
          type: "input",
          name: "github",
          message: "What is your GitHub Username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.github
        );
        allMembers.push(engineer);
        idArray.push(answers.engineerId);
        buildTeam();
      });
  }

  function InternQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the interns name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is your employee ID?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your email address?",
        },
        {
          type: "input",
          name: "school",
          message: "What is the interns school?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.school
        );
        allMembers.push(intern);
        idArray.push(answers.internId);
        buildTeam();
      });
  }

  function makeTeam() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(DIST_PATH, render(allMembers), "utf-8");
  }

  ManagerQuestions();
}

myApp();

// function addMoreQuestions () {
//     inquirer.prompt(
//         [
//             {
//                 type: 'list',
//                 name: 'addMoreEmployees',
//                 message: "Would you like to add more to your list?",
//                 choices: ["Engineer", "Intern", "I'm done"]
//             },

// }

// let Engineers = [];
// let Interns = [];
// let keepAsking = true;

// function addNewEngineer() {
//     inquirer.prompt(EngineerQuestions).then((responses) => {
//         let engineer = new Engineer(responses.engineerName, responses.employeeId, responses.email, responses.github)
//         Engineers.push(engineer)
//         console.log(Engineers)
//         addNewEmployee();

//     })
// }
// function addNewIntern() {
//     inquirer.prompt(InternQuestions).then((responses) => {
//         let intern = new Intern(responses.internName, responses.employeeId, responses.email, responses.school)
//         Interns.push(intern)
//         console.log(Interns)
//         addNewEmployee();

//     })

// }
// function addNewEmployee() {
//     inquirer.prompt(addMoreQuestions).then((responses) => {
//         if (responses.addMoreEmployees === "Engineer") {
//             addNewEngineer();

//         } else if (responses.addMoreEmployees === "Intern") {
//             addNewIntern();
//         } else {

//         }
//     })

// }

// function createNewManager() {
//     inquirer.prompt(ManagerQuestions).then((responses) => {
//         //console.log(responses)
//         let manager = new Manager(responses.managerName, responses.employeeId, responses.email, responses.officeNumber)
//         console.log(manager)
//         addNewEmployee();
//         addNewEngineer();
//         addNewIntern();
//     });
// };

// function generateHTMLFile() {
//     let markdown = generateHTML({
//         ...responses
//     });

//     writetoFile('team.html', markdown);
// };

// generateHTMLFile();
