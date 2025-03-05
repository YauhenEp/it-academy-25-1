

function addNumbers(number, numberTwo) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum)
  return sum;
}

addNumbers(1, 10, 20, 30, 50, 70, 90);
addNumbers(1, 10);


function addNumbersOne(number, numberTwo, ...rest) {
  let sum = number + numberTwo;
  if(rest.length > 0) {
    rest.forEach(number => sum += number)
  }
  console.log(sum)
  return sum;
}

function addNumbersTwo(number, numberTwo, ...rest) {
  let sum = number + numberTwo;
  if(rest.length > 0) {
    rest.forEach(function (number) {
      sum += number
    })
  }
  console.log(sum)
  return sum;
}

addNumbersOne(1, 10, 20, 30, 50, 70, 90);
addNumbersOne(1, 10);