var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "Enter a user name"
    },
    {
        type: "password",
        name: "enter password",
        message: "enter your password"
    },
    {
        type: "list",
        name: "sandwich",
        message: "What is your favorite sandwich?",
        choices: ["Turkey", "PB&J", "Ham & Cheese", "Philly Cheese"]
    },
    {
        type: "check-box",
        name: "bacon",
        message: "Include addons?",
        choices: ["Cheese", "Bacon", "Avocado"]
    },
    {
        type: "confirm",
        name: "confirm",
        message: "Are you sure?"
    }
])
    .then(function (inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.confirm) {
            console.log("\nWelcome " + inquirerResponse.username);
            console.log(inquirerResponse.sandwich + " is your favorite sandwich!\n");
        }
        else {
            console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
        }
    });