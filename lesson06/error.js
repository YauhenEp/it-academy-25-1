try {
  console.log(arr)
  let arr = [1, 2, 3];
} catch (err) {
  console.log(`This is our error: ${err}`)
} finally {
  console.log('I am always here')
}

console.log(`Continue...`);

try {
  let sum = 10 / 0;
  if(sum === Infinity) {
    throw new Error(`You can't divide by 0`)
  }
} catch (err) {
  console.error(err)
}
console.log(`Continue...`);