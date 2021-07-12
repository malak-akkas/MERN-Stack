class Ninja {
    constructor(name, health) {

        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`the name is  ${this.name}`);
    }
    showStats() {
        console.log(` the name is  ${this.name} , the speed is ${this.speed} , the strenght is ${this.strength} , the health is ${this.health}`);
    }
    drinkSake() {
        this.health += 10;
    }
}

// const ninja = new Ninja("Hyabusa", 100);
// ninja.sayName();
// ninja.showStats();
// ninja.drinkSake();
// ninja.showStats();

class Sensie extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;


    }

    speakWisdom() {
        this.drinkSake();
        console.log(`What one programmer can do in one month, two programmers can do in two months.`);
    }
}
const superSensei = new Sensie("Hyabusa");
superSensei.speakWisdom();
superSensei.showStats();