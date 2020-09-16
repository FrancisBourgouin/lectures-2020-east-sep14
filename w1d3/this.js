const cow = {
  color: "Black & White",
  breed: "Holstein",
  sound: "Moo Moo",

  makeSound: function () {
    console.log(this.sound)
  },
  tellBreed: function () {
    console.log(this.breed)
  }
}

// cow.makeSound()
// cow.tellBreed()


const dog = {
  color: "Black & White",
  breed: "Dalmatian",
  sound: "Woof Woof & Bark Bark",
  length: lengthCalculator,

  makeSound: function () {
    console.log(this.sound)
  },
  tellBreed: function () {
    console.log(this.breed)
  },
  mutation: function (newBreed) {
    this.breed = newBreed
  },
  addCharacteristic: function (key, value) {
    this[key] = value
    this.length = Object.keys(this).length
  },
  countKeys: function () {
    console.log(Object.keys(this).length)
  }
}

const lengthCalculator = function () {
  return Object.keys(this).length
}

console.log(dog.wat)
console.log(dog)
// dog.countKeys()
// dog.makeSound()
// dog.tellBreed()
// dog.mutation("Mastiff")
// dog.tellBreed()
// dog.addCharacteristic("loyal", "always")
// dog.addCharacteristic("best_friend", "humans")
// dog.countKeys()
// console.log(dog.length)
// console.log(dog)


