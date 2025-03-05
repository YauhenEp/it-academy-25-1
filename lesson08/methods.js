const promOne = Promise.reject(new Error('PromOne'));
const promTwo = Promise.reject(new Error('promTwo'));
const promThree = Promise.reject(new Error('promThree'));

const promSucOne = Promise.resolve('promSucOne');
const promSucTwo = Promise.resolve('promSucTwo');
const promSucThree = Promise.resolve('promSucThree');

function getPromise(promValue, timeout = 1000) {
  return new Promise((resolve, reject) => {
    if(promValue === 1) {
      setTimeout(() => {
        resolve(`getPromise ${promValue} ${timeout}`);
      }, timeout)
    }

    if(promValue === 2) {
      setTimeout(() => {
        reject(`Error ${promValue} ${timeout}`);
      }, timeout)
    }
  })
}

// Promise.all([promOne, promSucTwo, promSucThree, promSucOne])
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
//
//
// Promise.all([promSucTwo, promSucThree, promSucOne])
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

Promise.allSettled([promSucTwo, promSucThree, promSucOne, promOne, promTwo, promThree])
  .then(data => console.log(data))
  .catch(error => console.log(error));

Promise.race([getPromise(1, 5000), getPromise(1, 4500), getPromise(2, 3000)])
  .then(data => console.log(data))
  .catch(error => console.log(error));


Promise.any([getPromise(1, 5000), getPromise(1, 4500), getPromise(2, 3000)])
  .then(data => console.log(data))
  .catch(error => console.log(error));