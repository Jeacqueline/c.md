const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer =require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
        validate: titleInput => {
            if (titleInput) {
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
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            console.log('Please, enter a license');
            return false;
        }
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            console.log('Please, enter a GitHub username');
            return false;
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            console.log('Please, enter an email address');
            return false;
        }
    },
    {
        type: 'input',
        message: 'What is the purpose of this project?',
        name: 'purpose',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            console.log('Please, enter the purpose of this project');
            return false;
        }
    },
    {
        type: 'input',
        message: 'What are the requirements for running this project?',
        name: 'requirements',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            console.log('Please, enter the requirements for running this project');
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
