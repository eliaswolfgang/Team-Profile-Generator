const inquirer = require('inquirer');
const chalk = require('chalk');
const mgrChalk = chalk.redBright;
const engChalk = chalk.blueBright;
const intChalk = chalk.greenBright;
const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const team = [];
let currentObj;
let currentEmployee;
// Employee information
const main = [
    { 
      name: 'employeeRole',
      type: 'list',
      message: 'Which type of employee would you like to add?',
      choices: [ mgrChalk('Manager'), engChalk('Engineer'), intChalk('Intern') ]
    },
    { 
      name: 'employeeName',
      type: 'input',
      message: "What is this employee's name?"
    },
    {
      name: 'employeeEmail',
      type: 'input',
      message: "What is this employee's email?"
    },
    {
      name: 'employeeID',
      type: 'input',
      message: "What is this employee's ID number? (Please enter a number, e.g. 123)" 
    }     
];
// And each specific role's information...
const managerCheck = [
    {
      name: 'officeNumber',
      type: 'input',
      message: mgrChalk("What is this manager's office number?")
    }
];
const engineerCheck = [
    {
      name: 'github',
      type: 'input',
      message: engChalk("What is this engineer's GitHub username?"),
    }
];
const internCheck = [
    {
      name: 'school',
      type: 'input',
      message: intChalk("What is this intern's school/university?"),
    }
];
// Function to begin Inquirer session
function addEmployees() {
  inquirer.prompt(main)
    .then((answers) => {
    // First, set current employee type and class extenstion needed
        let roleCheck;
        if (answers.employeeRole == mgrChalk('Manager')) {
            currentEmployee = 'Manager'
            roleCheck = managerCheck;
        }
        if (answers.employeeRole == engChalk('Engineer')) {
            currentEmployee = 'Engineer'
            roleCheck = engineerCheck;
        }
        if (answers.employeeRole == intChalk('Intern')) {
            currentEmployee = 'Intern'
            roleCheck = internCheck;
        }
        currentObj = answers;
    // Then ask corresponding follow-up question...  
    inquirer.prompt(roleCheck)
    .then((answers) => {
        if (currentEmployee == 'Manager') {
            currentObj["officeNumber"] = answers.officeNumber;
            // ...and add the new object to the team array. 
            team.push(new Manager(currentObj.employeeName, currentObj.employeeID, currentObj.employeeEmail, currentObj.officeNumber)) 
        }
        if (currentEmployee == 'Engineer') {
            currentObj["github"] = answers.github;
            team.push(new Engineer(currentObj.employeeName, currentObj.employeeID, currentObj.employeeEmail, currentObj.github))
        }
        if (currentEmployee == 'Intern') {
            currentObj["school"] = answers.school;
            team.push(new Intern(currentObj.employeeName, currentObj.employeeID, currentObj.employeeEmail, currentObj.school))
        }
    // Then loop Inquirer session until no more team members are requested for addition 
    inquirer.prompt([
        {
          name: 'anotherEmployee',
          type: 'confirm',
          message: 'Would you like to add another employee?',
          default: true
        }])
        .then((answers) => {
        if (answers.anotherEmployee === true) {
            addEmployees()
        } else {
        let profileHTML = generateHTML(team);
        fs.writeFile('./dist/index.html', profileHTML, (error) => error ? console.log(error) : console.log("Find your team profile in the dist folder!"));
        }
      });                    
    });
  }); 

};

addEmployees();