// Classes in JavaScript

// Blueprint for objects
// Fancy objects
// Properties & Helpers
// Data encapsulation
// Can Create tree of objects
// Late addition to JS (syntax sugar for prototypes)


class Car {
  constructor(model) {
    this.model = model
  }

  honk = () => {
    console.log(`${this.model} says beep`)
  }

}

class SportsCar extends Car {

}

const camry = new Car('camry')
const corolla = new Car('corolla')
console.log(camry.model)

camry.honk()
corolla.honk()