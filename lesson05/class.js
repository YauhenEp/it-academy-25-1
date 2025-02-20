// const loginButton = document.getElementById('loginButton');
// const searchInputSelector = document.getElementById('searchInput');

function clickButtonSearch() {

}

function CarProducer(model, color, numberOfPassengers) {
    this.model = model;
    this.color = color;
    this.numberOfPassengers = numberOfPassengers;
}

const camry = new CarProducer('camry', 'white', 4);
console.log(camry);
const civic = new CarProducer('civic', 'black', 4);
console.log(civic);

class CarFactory {
    constructor(model, color, numberOfPassengers) {
        this.model = model;
        this.color = color;
        this.numberOfPassengers = numberOfPassengers;
    }

    getColor() {
        return this.color
    }
}

const camry1 = new CarFactory('camry', 'white', 4);
console.log(camry1);
const civic1 = new CarFactory('civic', 'black', 4);
console.log(civic1);
console.log(civic1.getColor());

class Car extends CarFactory {
    constructor(model, color, numberOfPassengers, weight) {
        super(model, color, numberOfPassengers);
        this.weight = weight;
    }

    static run() {
        console.log('Go go go')
    }

    get getWeight() {
        return this.weight;
    }

    set setWeight(newWeight) {
        this.weight = newWeight;
    }
}

const passat = new Car('passat', 'blue', 4, 1600);
console.log(passat);
console.log(passat.getColor());
// passat.run()
Car.run()

for(let attribute in passat) {
    console.log(`Key is ${attribute} - value is ${passat[attribute]}`);
}

Object.defineProperty(passat, 'color', {
    value: 'dark',
    writable: true,
    configurable: true,
    enumerable: true,
})
console.log(passat.getColor());
passat.color = 'yellow'
console.log(passat.getColor());
for(let attribute in passat) {
    console.log(`Key is ${attribute} - value is ${passat[attribute]}`);
}

console.log(passat.getWeight)
passat.setWeight = 3000;
console.log(passat.getWeight)


