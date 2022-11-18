(function exportController() {
    class Controller {
        constructor(pet) {
            this.pet = pet;
            this.age = pet.age + 1;
            this.hunger = 1;
            this.fitness = 10;
        }
    
    growUp() {
        const ageEle = document.querySelector('#age-container')
        const currentAge = this.age +=1
        ageEle.innerHTML = `Age: ${currentAge}`;
        this.renderMessage(`I am ${currentAge} years old now`);


        if((this.hunger + 3) > 10) {
            this.hunger = 10;
            return alert('I am so hungry! Please give me some rice balls!');
        } else {
            this.hunger = this.hunger + 3;
            console.log(`Hunger: ${this.hunger}`)
        }

        const hungerEle = document.querySelector('#hunger-level');
        const foodEle2 = document.createElement('div');
        const foodEle3 = document.createElement('div');
        const foodEle4 = document.createElement('div');
        foodEle2.id = 'food';
        foodEle2.innerHTML = `<img src="./images/sushi.png" alt="">`
        foodEle3.id = 'food';
        foodEle3.innerHTML = `<img src="./images/sushi.png" alt="">`
        foodEle4.id = 'food';
        foodEle4.innerHTML = `<img src="./images/sushi.png" alt="">`

        hungerEle.appendChild(foodEle2);
        hungerEle.appendChild(foodEle3);
        hungerEle.appendChild(foodEle4);

        if((this.fitness - 3) > 0) {
            this.fitness = this.fitness - 3;
            console.log(`Fitness: ${this.fitness}`)
        } else {
            this.fitness = 0;
            return alert('I need more exercises!');
        }

        const fitnessEle = document.querySelector('#fitness-level');

        fitnessEle.removeChild(fitnessEle.children[1]);
        fitnessEle.removeChild(fitnessEle.children[2]);
        fitnessEle.removeChild(fitnessEle.children[3]);
    }
    
    feedPet() {
        if((this.hunger - 1) > 0){
            this.hunger = this.hunger - 1;
            console.log(`Hunger: ${this.hunger}`)
        } else {
            this.hunger = 0;
        }
        const hungerEle = document.querySelector('#hunger-level');
        const foodEle = document.querySelector('#food')

        if (!foodEle) {
            this.renderMessage(`I am not hungry and I need some exercises!`)
        } else {
            hungerEle.removeChild(foodEle);
            this.renderMessage(`I am having a rice ball! YUMMY!`)
        }
    }

    doExercise() {
        if((this.fitness + 2) <= 10) {
            this.fitness = this.fitness + 2;
            console.log(`Fitness: ${this.fitness}`)
        } else {
            this.fitness = 10;
            return alert('I have enough exercises today!');
        }

        document.querySelector('#pei-pei').style.visibility = "hidden"
        setTimeout(function(){
            document.querySelector('#pei-pei').style.visibility = "visible"
            }, 3000);


        const fitnessLevelEle = document.querySelector('#fitness-level');
        const fitnessEle1 = document.createElement('div');
        const fitnessEle2 = document.createElement('div');
        fitnessEle1.id = 'fitness';
        fitnessEle1.innerHTML = `<img src="./images/fitness-icon-png-8.jpeg" alt=""></img>`
        fitnessEle2.id = 'fitness';
        fitnessEle2.innerHTML = `<img src="./images/fitness-icon-png-8.jpeg" alt=""></img>`

        fitnessLevelEle.appendChild(fitnessEle1)
        fitnessLevelEle.appendChild(fitnessEle2)

        this.renderMessage(`I go for a walk now bye!`);
    }

    renderMessage(message) {
        const messageEle = document.createElement('div');
        messageEle.id = 'message';
        messageEle.innerHTML = message;

        const livingRoom = document.querySelector('#living-room');
        livingRoom.appendChild(messageEle);

        setTimeout(() => {
            livingRoom.removeChild(messageEle);
        }, 3000);
    }
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
} ());