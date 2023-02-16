// TODO: Create a function that returns the license link
// If there is no license, return an empty string

const fs =require('fs');
const index=require('../index.js');

function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    default:
      return "";
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT'){
    badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if(license === 'Apache 2.0'){
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  }else if(license === 'GPL v3.0'){
    badge = '![License](https://upload.wikimedia.org/wikipedia/commons/8/86/GPL_v3_Blue_Badge.svg)'
  } else{
    badge = ''
  }
  return badge;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `## License

${badge}

This project is licensed under the ${license} license. For more information, see [LICENSE](${link}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  
  # ${answer.title}

  ## Table of Contents:

### [Description](#description)
### [License](#license)
### [Installation](#installation)
### [Use](#use)
### [Contributors](#contributors)
### [Test](#test)
### [Questions](#questions)

## Description:
${answer.description}


## ${renderLicenseSection(answer.license)}${renderLicenseBadge(answer.license)}
### ${renderLicenseLink(answer.license)}

## Installation
### For the application to work properly, the following must be installed: 
### ${answer.installation}

## Use:
### ${answer.use}

## Contributions:
### ${answer.contributions}

## Test:
### Enter the following commands to test this application:
### ${answer.test}

## Questions Section
### If you have any questions, please do not hesitate to contact me through:
GitHub: https://github.com/${answer.askMeAboutIt} or by Email: ${answer.email}
`;
}

module.exports = generateMarkdown;
