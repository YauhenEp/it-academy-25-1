const bool: boolean = true;
const n: number = 13;
const str: string = 'trrr';

const arr: string[] = ['a', 'b', 'c'];
const arrN: Array<Number> = [12, 12, 44];

const arrDiff: any[] = ['a', 'b', 'c', 12, true];

const arrT: [number, string, boolean] = [12, 'dfd', true];

enum Color {
  'red' = 'red',
  'green' = 'green',
  'blue' = 'blue',
  'yellow' = 'yellow',
  'white' = 'white',
  'gray' = 'gray',
}

console.log(Color.green);

function getColor(color: Color): string {
  return color;
}

getColor(Color.blue)

function getNewColor(color: Color): void {
  color;
}

function greet(name: string, lastName: string, byeType?: string): string {
  return `Hello ${name} ${lastName}! How are you?${byeType ? ' ' + byeType : ''}`;
}

console.log(greet('Dasha', 'Ivanova'))
console.log(greet('Dasha', 'Ivanova', 'Thank you! Bye!'))


function add<T>(numA: T, numB: T): T {
  console.log(typeof numA);
  // @ts-ignore
  return numA + numB;
}

console.log(add(2, 3));
console.log(add('esfdsf', 'sdfdsf'));
console.log(add(null, null));