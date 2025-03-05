const ssa = [
  {name: "a", width: "10", len:"12"},
  {name: "b", width: "12", len:"14"},
  {name: "c", width: "15", len:"11"}
]

// [{name: "a", square: "120"},{name: "b", square: "168"},{name: "c", square: "165"}]

function one(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push({
      name: arr[i].name,
      square: arr[i].width * arr[i].len,
    });
  }
  console.log(newArr)
  return newArr
}

one(ssa)

function two(arr) {
  let newArr = [];
  for (let obj of arr) {
    newArr.push({
      name: obj.name,
      square: obj.width * obj.len,
    });
  }
  console.log(newArr)
  return newArr
}

two(ssa);

function three(arr) {
  let newArr = [];
  arr.forEach(function (obj) {
    newArr.push({
      name: obj.name,
      square: obj.width * obj.len,
    });
  })
  console.log(newArr)
  return newArr
}

three(ssa)

function four(arr) {
  let newArr = arr.map(obj => {
    return {
      name: obj.name,
      square: obj.width * obj.len,
    };
  })
  console.log(newArr)
  return newArr
}

four(ssa)