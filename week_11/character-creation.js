function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
    this.printStats = function() {
            console.log(this.name);
            console.log(this.profession);
            console.log(this.gender);
            console.log(this.age);
            console.log(this.strength);
            console.log(this.hitpoints);
        };

    this.isALive = function() {
        if (this.hitpoints > 0) {
            console.log(this.name + " is still alove!");
            console.log("\n---------------------\n");
            return true;
        }
        console.log(this.name + " has died!");
        return false;
    };

    this.attack = function(character2) {
        character2.hitpoints -= this.strength;
    };
    this.levelUP = function() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    };
}

var gunner = new Character("Gunner", "Hitman", "female", 24, 30, 80);
var bigGuy = new Character("Big Guy", "Tank", "female", 24, 20, 120);
// var medic = new Character("Medic Mike", "Healer", "male", 80, 5, 50);

gunner.printStats();
bigGuy.printStats();
// medic.printStats();

gunner.attack(bigGuy);
bigGuy.printStats();
bigGuy.isALive();

gunner.levelUP();
gunner.printStats();

while (bigGuy.isALive() && gunner.isALive()) {
    bigGuy.attack(gunner);
    gunner.attack(bigGuy);

    bigGuy.printStats();
    gunner.printStats();
}