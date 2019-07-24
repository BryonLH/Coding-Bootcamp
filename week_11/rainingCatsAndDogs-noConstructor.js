var dogs = {
    raining = true,
    noise: "Woof!",
    makeNoise: function() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};


var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {
        if (this.raining) {
            console.log(this.noise);
        }
    },
    setRaining(raining) {
        this.raining = raining;
    }
};

dogs.makeNoise();
cats.setRaining(true);
cats.makeNoise();

var massHysteria = function(dogs, cats) {
    if (dogs.raining && cats.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER MASS HYSTERIA!!");
    }
};

massHysteria(dogs, cats);

function Person (fName, lName) {
    this.first = fName;
    this.last = lName;
}
var sam = new Person("Rob", "Roberts");
var bill = new Person("will", "bowers");
console.log(sam, bill);
