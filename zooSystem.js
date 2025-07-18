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
    console.log(`${this.#name} makes a generic sound.`);
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
    this.breed = "Labrador";
  }

  // Dog Methods

  makeSound() {
    console.log(`${this.getInfo().split(" is")[0]} barks: Woof!`); // Logs barking sound-Polymorphism in action
  }
}

// Using inheritance- Add Cat subclass
class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  // Cat Methods
  makeSound() {
    console.log(`${this.getInfo().split(" is")[0]} meows: Meow!`); // Logs meowing sound-Polymorphism in action
  }
}

// Using inheritance- Add Bird subclass
class Bird extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  // Bird Methods
  makeSound() {
    console.log(
      `${this.getInfo().split(" is")[0]} chirps: Chirp, Chirp, Tweet, Tweet!` // Logs chirping sound-Polymorphism in action
    );
  }
  fly() {
    console.log(`${this.getInfo().split(" is")[0]} is flying!`); // added new fly method
  }
}

// Test Animal Object and Methods

const tiger = new Animal("Tiger", 5);
tiger.eat();
console.log(tiger.getInfo());
tiger.makeSound();

// Test New Extended Dog Class
const Buddy = new Dog("Buddy", 4);
Buddy.makeSound();
Buddy.eat();
console.log(Buddy.getInfo());

// Test Cat Class
const Meowers = new Cat("Meowers", 2);
Meowers.makeSound();
console.log(Meowers.getInfo());

// Test Bird Class
const Tweety = new Bird("Tweety", 4);
Tweety.makeSound();
console.log(Tweety.getInfo());
Tweety.fly();
Tweety.eat();
