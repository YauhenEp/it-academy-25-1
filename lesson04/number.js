let num = +'10' + 10;
console.log(num)

let num1 = Number('10n') + 10;
console.log(num1)

let num2 = parseInt('10', 10) + 10;
console.log(num2)

let num3 = (5).toString(2);
console.log(num3)


console.log(+(0.1 + 0.2).toFixed(1) === 0.3)

console.log((10).toPrecision(10));

console.log(Math.max(10, 20, 56))

console.log(Math.floor(Math.random() * (100 - 1) + 1));

console.log('floor --- ', Math.floor(10.9))
console.log('ceil --- ', Math.ceil(10.1))
console.log('round --- ', Math.round(10.9))
console.log('round  2 --- ', Math.round(10.1))


const bNum = 13024493n
const bNum2 = 9234329409n
const bNum3 = 334329432n

// console.log(Math.max(bNum, bNum3, bNum3))

const s = Symbol('hi');
const s1 = Symbol('hi');

console.log(s === s1)

const s2 = Symbol.for('hi');
const s3 = Symbol.for('hi');
console.log(s2 === s3)
