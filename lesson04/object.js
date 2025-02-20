console.log(typeof []);
console.log(typeof 10);
console.log(typeof '');
console.log(typeof null);

const person = {
  name: 'John',
  lastName: 'Doe',
  email: 'john@gmail.com',
  _password: 'password@gmail.com',
  run: function() {
    console.log(`I am running on ${this.name}`);
  },
  family: {

  },
  'Commerce and Business': 'saf-item#item-B'
}

person.run();
console.log(person.name)
console.log(person["Commerce and Business"])

let data = 'lastName'

console.log(person[data]);


person.name = 'Mike';
console.log(person.name);

let car = {};
let truck = {};
console.log(car === truck);

let toyota = car;
console.log(car === toyota);

toyota.model = 'camry'
console.log(car);

car.color = 'red'
console.log(toyota);
console.log(car);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

Object.freeze(toyota)
toyota.class = 'sedan'
console.log(toyota);
person['email'] = 'hello';
console.log(person);
