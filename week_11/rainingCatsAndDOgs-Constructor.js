function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
}

var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");

dogs.makeNoise();
cats.makeNoise();

cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
    if (dogs.raining && cats.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER MASS HYSTERIA!!")
    }
}