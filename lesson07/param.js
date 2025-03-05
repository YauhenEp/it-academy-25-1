function greet(name, lastName, greetType = 'Hello', byType = 'Bye') {
  console.log(`${greetType}! My name is ${name}, ${name}  ${lastName}! ${byType}!`);
}

greet('Gosha', 'Ivanov', 'Hi', 'Good bye')
greet('Gosha', 'Ivanov')

let number = 10;

console.log(number)

function add() {
  const n = 20
  console.log(n)
  return number
}

console.log(add())

function addOne() {
  return function () {
    return number
  }
}
console.log(addOne()())
