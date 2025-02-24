const age = 17;
if(age >= 18 && age <= 65) {
  console.log('You can by beer')
} else if (age <= 18) {
  console.log('You are too young. Go away!')
} else if (age >= 18) {
  console.log('Noooooooooo')
} else {
  console.log('You are too old. Go away!')
}

console.log('Finish');

const month = new Date().getMonth();

switch (month) {
  case 0:
    console.log('January');
    break;
  case 1:
    console.log('February')
    break;
  case 2:
    console.log('March');
    break;
  case 3:
    console.log('April');
    break;
  default:
    console.log('Please input correct month number')
}

age >= 18 ? console.log('You can buy vodka') : console.log('GO away');

if(age >= 18 && age <= 65) console.log('You can by beer')


const arr = [1, 2, 3]

delete arr[0]
delete arr[2]
console.log(arr)
console.log(arr.length)