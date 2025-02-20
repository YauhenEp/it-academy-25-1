const str = String('Hello')


const str1 = 'World';
const str2 = "World";
const str3 = `World`;

const newStr = str + " " + str1 + '! If you want a ' + str2 + " do something!\n\r \"Say Hello\"";
console.log(newStr)

const newStr1 = `${str} ${str1}! If you want a ${str2} do something! "Say Hello"`;
console.log(newStr1)

console.log(newStr1[1])
console.log(newStr1.charAt(1))

console.log(newStr.indexOf('World'))
console.log(newStr.lastIndexOf('World'))

console.log(newStr.replace(/World/g, 'Peace'));

console.log(newStr1.slice(10, 17));
console.log(newStr1.substring(10, 17));
console.log(newStr1.substr(10, 15));

console.log(newStr.length)