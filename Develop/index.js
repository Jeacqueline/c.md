const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer =require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            console.log('Please, enter a project name');
            return false;
        }
    },
    {
        type: 'list',
        message: 'What is the license for this project?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            }
            console.log('Please, enter a license');
            return false;
        }
    },
    {
        type: 'input',
        message: 'Please provide a description of your project',
        name: 'description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            console.log('Please, enter a project description');
            return false;
        }
    },
    {
        type: 'input',
        message: 'What steps are necessary to install your project?',
        name: 'installation',
        validate: installationInput => {
            if (installationInput) {
                return true;
            }
            console.log('Please, enter some steps required to install your project');
            return false;
        }
    },
    {
        type: 'input',
        message: 'what is the utility of your project?',
        name: 'use',
        validate: useInput => {
            if (useInput) {
                return true;
            }
            console.log('Please, provide a utility of your project');
            return false;
        }
    },
    {
        type: 'input',
        message: 'What guidelines should others follow in order to contribute?',
        name: 'contributions',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            }
            console.log('Please enter contribution guidelines');
            return false;
        }
    },
    {
        type: 'input',
        message: 'How to test this project?',
        name: 'test',
        validate: testInput => {
            if (testInput) {
                return true;
            }
            console.log('Please explain how to test this project');
            return false;
        }
    },
    {
        type: 'input',
        message: 'What is your github username so others can contact you with questions??',
        name: 'askMeAboutIt',
        validate: AskMeAboutItInput => {
            if (AskMeAboutItInput) {
                return true;
            }
            console.log('Please enter a valid github username');
            return false;
        }
    },
    {
        type: 'input',
        message: 'What is your email address so that there is another way to contact you in case of questions?',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            console.log('Please, enter an email address');
            return false;
        }
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers) {
        const fileContent = generateMarkdown(answers);
        writeToFile("README.md", fileContent);
    });
}

// Call to initialize app
init();

module.exports = questions;
