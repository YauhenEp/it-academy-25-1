function getCount() {
  let counter = 0;
  return function () {
    const c = ++counter;
    console.log(c)
    return c;
  }
}

const counterOne = getCount();
counterOne()
counterOne()
counterOne()
counterOne()
counterOne()
counterOne()
counterOne()
counterOne()


const counterTwo = getCount();
counterTwo()
counterTwo()
counterTwo()
counterTwo()
counterTwo()

counterOne()

function getArr() {
  let arr = [];
  return function (data) {
    arr.push(data);
    console.log(arr)
    return arr
  }
}

const dataArray = getArr();
dataArray({name: 'VAsya'})
dataArray({name: 'Petya'})






