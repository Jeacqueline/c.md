// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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
    badge = '![GitHub license]()'
  } else if(license === 'Apache 2.0'){
    badge = '![License]()'
  }else if(license === 'Apache 2.0'){
    badge = '![License]()'
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
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

${data.description}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
