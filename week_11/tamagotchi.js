// this is my tamagotchi

var DigitalPal = function () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full");
        }
    };

    this.sleep = function () {
        if (this.sleepy) {
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired!")
        }
    };
    this.play = function () {
        if (this.bored) {
            console.log("Yay, let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?");
        }
    };

    this.increaseAge = function () {
        this.age++;
        this.console.log("Happy birthday to me! I am " + this.age + " old!");
    };
};

var dog = new DigitalPal();

dog.outisde = false;
dog.bark = function() {
    console.log("Woof! Woof!");
};

dog.letOutsie = function() {
    if (!this.outside) {
        console.log("Yay! I love the outdoors");
        this.outside = true;
        this.bark();
    } else {
        console.log("We're already outside though...");
    }
};

dog.letInside = function() {
    if (this.outside) {
        console.log("Aww.. Do I have to?");
        this.outSide = false;
    } else {
        console.log("We're already inside though...")
    }
};

var cat = new DigitalPal();

cat.houseQuality = 100;

cat.meow = function() {
    console.log("Meow! Meow!");
};

cat.destroyFurniture = function() {
    if (this.houseQuality - 10 > 0) {
        this.houseQuality -= 10;
        this.bored = false;
        this.sleepy = true;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    } else {
        console.log("I've already destroyed it all!");
    }
};

cat.buyNewFurniture = function() {
    this.houseQuality += 50;
    console.log("Are you sure that is a good idea?");
};

// Try calling an animal's methid below
// Example: cat.destroyFurniture();