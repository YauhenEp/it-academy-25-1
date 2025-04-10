interface Animal {
  name: string;
  age: number;
  type: string;
  height: number;
  color?: string;
  family?: Family
}

interface Pets {
  owner: string;
}

interface Family {
  father: string;
  mother: string;
}

type Vehicle = {
  name: string;
  age: number;
  model: string;
}

type AnimalPet = Animal | Pets;

const cat: Animal = {
  name: 'Murka',
  age: 5,
  type: 'Britain',
  height: 30,
}

const dog: Animal = {
  name: 'Sharik',
  age: 6,
  type: 'Britain',
  height: 45,
  color: 'white'
}

const toyota: Vehicle = {
  name: 'toyota',
  age: 2,
  model: 'Camry'
}