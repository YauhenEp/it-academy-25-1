const axios = require('axios');

async function add() {
  let sum = 0;
  setTimeout(() => {
    sum += 5
  });
  return sum;
}

const result = new Promise((res, rej) => {
  res(axios.get('https://fakerestapi.azurewebsites.net/api/v4/Activities'));
}).then((response) => {
  console.log('Success -- ', response);
}).catch((err) => {
  console.log('ERROR -- ', err);
}).finally(() => {
  console.log('I am always here')
})

console.log(result)

axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities')
.then((response) => response.data)
.then(data => console.log(data));

Promise.reject(new Error('Promise rejected')).catch((err) => console.log(err));
Promise.resolve('Success').then(data => console.log(data));