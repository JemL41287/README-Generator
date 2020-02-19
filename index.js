const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer.prompt([
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
        name: "contents",
        message: "Provide a table of contents for your application."
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
        message: "Provide a license for your application."
    },
    {
        type: "input",
        name: "contributing",
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

]).then(function ({ username }) {
            const queryURL = `https://api.github.com/users/${username}`;

            axios.get(queryURL).then(function (res) {
                const email = res.data.email;
                const imageURL = res.data.avatar_url;


            })
        })



const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
