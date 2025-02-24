let age = 0;
while(age) {
  console.log(`age: ${age}`);
  age--
}

do {
  console.log(`age: ${age}`);
} while(age);

const month = new Date().getMonth();
const months = ['Jan', 'Feb', 'MAr', 'Apr', 'May', 'June']
console.log(months[month])
for(let i = 0; i < months.length; i++) {
  console.log(`Month is ${months[i]}`);
  if(months[i] === 'Apr') {
    break;
  }
  for(let j = 0; j < months[i].length; j++) {
    console.log(`Letter is ${months[i][j]}`);
  }
}

for(let month of months) {
  console.log(`Second cycle Month is ${month}`);
  if(month === 'Apr' || month === 'May') {
    continue;
  }
  for(let letter of month) {
    console.log(`Second cycle Letter is ${letter}`);
  }
}
