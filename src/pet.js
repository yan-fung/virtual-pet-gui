const MAXIMUM_FITNESS = 10;
const INCREASE_FITNESS = 4;
const DECREASE_HUNGER = 3;
const MINIMUM_HUNGER = 0;
const MINIMUM_FITNESS_LEVEL = 4;
const MINIMUM_HUNGER_LEVEL = 5;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    }

Pet.prototype.growUp = function () {
    this.age +=1;
    this.hunger +=5;
    this.fitness = this.fitness -3;
}

Pet.prototype.walk = function () {
    if ((this.fitness + INCREASE_FITNESS) <= 10) {
        this.fitness += INCREASE_FITNESS;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
}

Pet.prototype.feed = function () {
    if((this.hunger - DECREASE_HUNGER) >= 0) {
        this.hunger -= DECREASE_HUNGER;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
}

Pet.prototype.checkUp = function () {
    if (this.fitness < MINIMUM_FITNESS_LEVEL && this.hunger >= MINIMUM_HUNGER_LEVEL) {
        return 'I am hungry AND I need a walk'
    }
    if (this.fitness < MINIMUM_FITNESS_LEVEL) {
        return 'I need a walk';
    };
    if (this.hunger >= MINIMUM_HUNGER_LEVEL) {
        return 'I am hungry'
    } else {
        return 'I feel great!'
    }
}


module.exports = Pet;