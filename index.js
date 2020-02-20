const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

const writeFileAsync = util.promisfy(fs.writeFile);

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
        type: "input",
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
    {
        type: "input",
        name: "questions",
        message: "Provide questions that may arise for a user when using the application."
    }

];

function promptUser() {
    return inquirer.prompt(questions);
};

function generateMarkdown(answer, image, badge) {
    return `# ${answer.title}`
}





function writeToFile(fileName, data) {
}

function init() {

}

init();
