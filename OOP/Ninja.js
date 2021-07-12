class Ninja {
    constructor(name, health, speed, strength) {

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

const ninja = new Ninja("Hyabusa", 100);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();

class Sensie extends Ninja {
    constructor(name, health, wisdom) {
        super(name, health);
        this.health = 200;
        this.wisdom = 10;
    }

    speakWisdom() {
        console.log(`wisdom speak ${this.wisdom}`);
    }
}
const superSensei = new Sensie("Hyabusa", 200, 10);
superSensei.speakWisdom();
superSensei.drinkSake();