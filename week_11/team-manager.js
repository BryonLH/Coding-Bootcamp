// team-manager ativity

var inquirer = require("inquirer");
var players = [];

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        var coin = Math.floor((Math.random() * 2) + 1);
        if (coin = 1) {
            this.offense++;
        } else {
            this.defense++;
        }
    }
    this.badGame = function () {
        var coin = Math.floor((Math.random() * 2) + 1);
        if (coin = 1) {
            this.offense--;
        } else {
            this.defense--;
        }
    }
}

Player.prototype.printStats = function () {
    console.log("Name: " + this.name +
        "\nPosition: " + this.position +
        "\nOffense Skill: " + this.offense +
        "\nDefense Skill: " + this.defense)
}

var starters = [];
var subs = [];
var team = [];
var count = 0;

var playerInput = function () {
    if (count < 3) {
        inquirer.prompt([
            {
                message: "What is your name?",
                name: "name"
            },
            {
                message: "What is your position?",
                name: "position"
            },
            {
                message: "Offense skill level",
                name: "offense"
            },
            {
                message: "Defense skill level",
                name: "defense"
            }
        ]).then(function (answers) {
            var newPlayer = new Player(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense);
            newPlayer.printStats();
            players.push(newPlayer);
            count++;
            playerInput();
        });
    }
}
playerInput();
