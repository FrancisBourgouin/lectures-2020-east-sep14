// Let's build some events!

const EventEmitter = require('events');

const kitchenRunner = new EventEmitter();
const clientRunner = new EventEmitter();

const currentDate = new Date()

const tellCustomersPlateAlmostThere = () => {
  console.log("Plate is coming soon!")
}
const cutPotatoes = (nextStep) => {
  console.log("I'm cutting potatoes")
  setTimeout(() => {
    console.log("Finished cutting the potatoes!")
    kitchenRunner.emit('finishcut')
  }, 3000)
}

const boilPotatoes = (nextStep) => {
  console.log('boiling the potatoes')
  setTimeout(() => {
    console.log("Finished boiling the potatoes!")
    kitchenRunner.emit('finishboil')
  }, 3000)
}

const hashBrownify = () => {
  console.log('HASH BROWNIFYING !')
  setTimeout(() => {
    console.log("Finished the hash browns ?")
    kitchenRunner.emit('finishhashbrown')
  }, 3000)
}

const kitchenTasks = {
  cutting: cutPotatoes,
  boiling: boilPotatoes,
  hashbrown: hashBrownify
}

kitchenRunner.on('finishcut', () => {
  boilPotatoes()
});
kitchenRunner.on('start', () => {
  cutPotatoes()
});
kitchenRunner.on('finishboil', () => {
  hashBrownify()
  clientRunner.emit('almostdone')
});
kitchenRunner.on('superSayanMode', () => {
  kitchenRunner.emit('finishcut')
  kitchenRunner.emit('finishboil')
})
clientRunner.on('newclient', () => {
  console.log("Hello new client!")
  kitchenRunner.emit('start')
})
clientRunner.on('almostdone', () => {
  tellCustomersPlateAlmostThere()
})


clientRunner.emit('newclient')