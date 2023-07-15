const licenseInfo = {
  'MIT': {
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: '[MIT](https://opensource.org/licenses/MIT)',
    section: 'This project is licensed under the MIT License. For more information, please refer to the [MIT License](https://opensource.org/licenses/MIT).'
  },
  'GPL': {
    badge: '[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    link: '[GPL](https://www.gnu.org/licenses/gpl-3.0)',
    section: 'This project is licensed under the GPL License. For more information, please refer to the [GPL License](https://www.gnu.org/licenses/gpl-3.0).'
  },
  'Apache-2.0': {
    badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: '[Apache-2.0](https://opensource.org/licenses/Apache-2.0)',
    section: 'This project is licensed under the Apache License 2.0. For more information, please refer to the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).'
  },
  'BSD-3-Clause': {
    badge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    link: '[BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)',
    section: 'This project is licensed under the BSD 3-Clause License. For more information, please refer to the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).'
  },
  'MPL-2.0': {
    badge: '[![License: MPL](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    link: '[MPL-2.0](https://opensource.org/licenses/MPL-2.0)',
    section: 'This project is licensed under the Mozilla Public License 2.0. For more information, please refer to the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).'
  }
};


//Function to render the license badge based on a license option
function renderLicenseBadge(license) {
  if (license && licenseInfo[license]) {
    return licenseInfo[license].badge;
  }
  return '';
}

// Function to render the license link based on the license option
function renderLicenseLink(license) {
  if (license && licenseInfo[license]) {
    return licenseInfo[license].link;
  }
  return '';
}

// Function to render the license section content based on the license option
function renderLicenseSection(license) {
  if (license && licenseInfo[license]) {
    return `## License\n\n${licenseInfo[license].section}`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown( license, answers) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);
  const licenseLink = renderLicenseLink(license);
  const { title, description,installation, usage, tests, contributing } = answers;
 return `# ${title}

 ${licenseBadge}

## Description
${description}

## License
${license}
${licenseSection}
${licenseLink}



## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}


## Contributing
${contributing}

## Tests
${tests}

## Questions
For additional questions, you can reach me via:
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
