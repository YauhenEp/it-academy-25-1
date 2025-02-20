const person = {
  name: 'John',
  lastName: 'Doe',
  email: 'john@gmail.com',
  _password: 'password@gmail.com',
  run: function() {
    console.log(`I am running on ${this.name}`);
  },
  family: {

  },
  'Commerce and Business': 'saf-item#item-B'
}

const man = {
  name: 'Vasya',
}

person.run.call(man)

