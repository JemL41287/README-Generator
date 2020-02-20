const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?",
    
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your application."
    },
    {
        type: "input",
        name: "installation",
        message: "Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "list",
        name: "license",
        message: "What license did you use?",
        choices: ["MIT", "BSD", "GNU"]
    },
    {
        type: "input",
        name: "contributions",
        message: "If you created an application or package and would like other developers to contribute it, provide those guidelines here."
    },
    {
        type: "input",
        name: "tests",
        message: "Write some tests for your application and provide examples on how to run them."
    },

];

function promptUser() {
    return inquirer.prompt(questions);
};

function generateMarkdown(answer, image, banner) {
    return `# ${answer.title}

##
${banner}

## Description

${answer.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation

${answer.installation}

## Usage

${answer.usage}

## License

${answer.license}

## Contributing

${answer.contributions}

## Tests

${answer.tests}

## Questions

![My Avatar](${image})

`

};


async function getImage(username) {
    try {
        const queryURL = `https://api.github.com/users/${username}`;
        
        const response = await axios.get(queryURL);
        const avatarURL = await response.avatar_url;

        return avatarURL  
    
    } catch (error) {
        console.error(error);
    }

};

/*async function getEmail(email) {
    try {
        const queryURL = `https://api.github.com/users/${username}`;
        
        const response = await axios.get(queryURL);
        const email = await response.data.email;

        return email
    
    } catch (error) {
        console.error(error);
    }

};*/

async function getBadge(license) {
    try {
        if (license === "MIT") {
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        };
        if (license === "BSD") {
            return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        };

        if (license === "GNU") {
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
        };

    }
    catch(error) {
        console.log(error)
    }
};

async function init() {
    console.log("Fill in the prompts to create your README file:");

    try {
        const answers = await promptUser();

        const username = answers.username;

        const image = await getImage(username);

        /*const email = await getEmail(email);*/

        const license = answers.license;

        const banner = await getBadge(license);

        const md = generateMarkdown(answers, image, banner);


        await writeFileAsync("README.md", md);

        console.log("Succesfully created README.md")

    } catch(err) {
        console.log(err);
    }

};

init();




