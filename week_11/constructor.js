function Programmer(name, position, age, faveLanguage) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.faveLanguage = faveLanguage;
}

Programmer.prototype.printInfo = function() {
    console.log(
        "Name: " + this.name +
        "\nPosition: " + this.position +
        "\nAge: " + this.age +
        "\nLanguage: " + this.faveLanguage
    );
};

var bob = new Programmer("Bob Smith", "Boss", 45, "Javascript");

bob.printInfo();