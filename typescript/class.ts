class Car {
  readonly carName: string;
  readonly model: string;
  readonly numberOfWheels = 4;
  constructor(public name: string, model: string) {
    this.carName = name;
    this.model = model;
  }

  public getCarName() {
    console.log(this.carName);
    return this.carName;
  }

  protected getCarModel() {
    console.log(this.model);
    return this.model;
  }

  private getNumberOfWheels() {
    return this.numberOfWheels;
  }

  public getCarInformation() {
    console.log(`name: ${this.carName}, model: ${this.model}, numberOfWheels: ${this.getNumberOfWheels()}`);
    return `name: ${this.carName}, model: ${this.model}, numberOfWheels: ${this.getNumberOfWheels()}`;
  }
}

const car = new Car('Toyota', 'Camry')
car.getCarName();
car.getCarInformation();

class Nissan extends Car {
  constructor() {
    super('Nissan', 'Xtrail');
  }

  public addToModel(model: string) {
    console.log(`${this.getCarModel()} ${model}`)
    return `${this.getCarModel()} ${model}`;
  }
}

const nissan = new Nissan()
nissan.getCarName();
nissan.addToModel('newModel');

abstract class Person {
  static lastName = 'person';
}

