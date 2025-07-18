// Zoo Management System

// Define an animal class
class Animal{
    #name
    #age
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
        console.log(`Created a new animal: ${this.#name}! Current Age: ${this.#age}`)
    }
}

const tiger = new Animal("Tiger", 3)