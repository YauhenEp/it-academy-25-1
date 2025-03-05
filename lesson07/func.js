console.log(addNumbers(10, 12))
console.log(addNumbers(34, 123))

function addNumbers(number, numberTwo) {
  return number + numberTwo;
}


const divideNumbers = function () {
  return 10 / 2;
}

console.log(divideNumbers());

const person = {
  name: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
  greet: function (greetType, byType) {
    console.log(`${greetType}! My name is ${this.name}, ${this.name}  ${this.lastName}! ${byType}!`);
  }
}

const secondPerson = {
  name: 'Mike',
  lastName: 'Modano',
  email: 'Mike@Modano.com',
}
person.greet('Hi', 'Bye');
person.greet.call(secondPerson, 'Hey', 'Good bye');
person.greet.apply(secondPerson, ['Hello', 'Bye']);
const greetPerson = person.greet.bind(secondPerson, 'Hello hello', 'Bye');
greetPerson()

const thirdPerson = {
  name: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
  greet: (greetType, byType)=> {
    console.log(`${greetType}! My name is ${this.name}, ${this.name}  ${this.lastName}! ${byType}!`);
  }
}

thirdPerson.greet('Hey', 'Good bye')