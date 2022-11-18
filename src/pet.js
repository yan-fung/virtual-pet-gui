const MAXIMUM_FITNESS = 10;
const INCREASE_FITNESS = 4;
const DECREASE_HUNGER = 3;
const MINIMUM_HUNGER = 0;
const MINIMUM_FITNESS_LEVEL = 4;
const MINIMUM_HUNGER_LEVEL = 5;
const NOT_ALIVE_MSG = "Your pet is no longer alive :(";

(function exportPet() {
    function Pet(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
        this.childred = [];
        }
    
    Pet.prototype = {
        get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        }
    }
    
    Pet.prototype.growUp = function () {
        if (!this.isAlive) {
            throw new Error(NOT_ALIVE_MSG);
        }else{
            this.age +=1;
            this.hunger +=5;
            this.fitness = this.fitness -3;
        }
    }
    
    Pet.prototype.walk = function () {
        if (!this.isAlive) {
            throw new Error(NOT_ALIVE_MSG);
        }
        if ((this.fitness + INCREASE_FITNESS) <= 10) {
            this.fitness += INCREASE_FITNESS;
        } else {
            this.fitness = MAXIMUM_FITNESS;
        }
    }
    
    Pet.prototype.feed = function () {
        if (!this.isAlive) {
            throw new Error(NOT_ALIVE_MSG)
        }
        if((this.hunger - DECREASE_HUNGER) >= 0) {
            this.hunger -= DECREASE_HUNGER;
        } else {
            this.hunger = MINIMUM_HUNGER;
        }
    }
    
    Pet.prototype.checkUp = function () {
        if (!this.isAlive) {
            throw new Error(NOT_ALIVE_MSG);
        }
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
    
    Pet.prototype.adoptChild = function (child) {
        this.childred.push(child);
    };
    
    Pet.prototype.haveBaby = function (child) {
        const baby = new Pet(child);
        this.childred.push(baby);
    };
    
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Pet;
    } else {
        window.Pet = Pet;
    };
    
}());

