// Напишите функцию reverseWords, которая принимает строку и возвращает её с перевернутыми словами, но в том же порядке.
//   Например, из "Hello world" должно получиться "olleH dlrow".

export function reverseWord(str) {
  return str.split(' ').map(strAnother => strAnother.split('').reverse().join('')).join(' ');
}
// console.log(reverseWord("Hello world"));

function reverseWord1(str) {
  const words =  str.split(' ');
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    newArr.push(words[i].split('').reverse().join(''))
  }
  return newArr.join(' ');
}

// console.log(reverseWord1("Hello world"));


// Создайте функцию filterLongWords, которая принимает массив слов и число n,
//   и возвращает новый массив, содержащий только слова длиной больше n.

export function filterLongWords(wordArray, wordLength) {
  let newArr = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > wordLength) {
      newArr.push(wordArray[i]);
    }
  }
  return newArr;
}

// console.log(filterLongWords(["Hello", "Metro", 'New'], 4));

function filterLongWords1(wordArray, wordLength) {
  return wordArray.filter(word => word.length > wordLength);
}

function filterLongWords2(wordArray, wordLength) {
  return wordArray.filter(function (word) {
    return word.length > wordLength
  });
}

// console.log(filterLongWords1(["Hello", "Metro", 'New'], 4));

// Напишите функцию countPropertyValues, которая принимает массив объектов и имя свойства, и возвращает объект, где ключи —
// это значения свойства, а значения — это количество раз, которое каждое значение встречается в массиве.

const items = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "green" },
  { name: "apple", color: "green" },
  { name: "banana", color: "yellow" }
];

const propertyName = 'color';

export function countPropertyValues(arrayOfObjects, propertyName) {
  return arrayOfObjects.reduce((prevObj, currObj) => {
    for (let key in currObj) {
      if (key === propertyName) {
        if(prevObj.hasOwnProperty(currObj[key])) {
          prevObj[currObj[key]] += 1;
          return prevObj;
        }
        prevObj[currObj[key]] = 1;
        return prevObj;
      }
    }
  }, {})
}

console.log(countPropertyValues(items, propertyName))

const arr = [10, 14, 15, 145, 143]

console.log(arr.reduce((prev, cur) => prev + cur, 1000))