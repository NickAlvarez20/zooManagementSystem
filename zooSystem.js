// Zoo Management System

// Define an animal class
class Animal {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
    console.log(`Created a new animal: ${this.#name}!`);
  }

  // Common methods for Animal (encapsulated, reusable)
  getInfo() {
    return `${this.#name} is ${this.#age} years old.`;
  }

  eat() {
    console.log(`${this.#name} is eating.`);
  }

  makeSound() {
    console.log(`${this.#name} makes a generic sound`);
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
    this.breed = "Labrador";
  }
  // Logs barking sound
  makeSound() {
    console.log(`${this.getInfo().split(" is")[0]} barks: Woof!`);
  }
}

// Test Animal Object and Methods

const tiger = new Animal("Tiger", 5);
tiger.eat();
console.log(tiger.getInfo());

// Test New Extended Dog Class
const Buddy = new Dog("Buddy", 4);
Buddy.makeSound();
Buddy.eat();
console.log(Buddy.getInfo());
