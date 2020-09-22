// Playing with timeouts

// setTimeout(() => console.log('Hello!'), 2000)
// setTimeout(() => console.log('Hola!'), 1500)
// console.log('How are you ?')

const cutPotatoes = (nextStep) => {
  console.log("I'm cutting potatoes")
  setTimeout(() => {
    console.log("Finished cutting the potatoes!")
    nextStep()
  }, 3000)
}

const boilPotatoes = (nextStep) => {
  console.log('boiling the potatoes')
  setTimeout(() => {
    console.log("Finished boiling the potatoes!")
    nextStep()
  }, 3000)
}

const hashBrownify = () => {
  console.log('HASH BROWNIFYING !')
  setTimeout(() => {
    console.log("Finished the hash browns ?")
  }, 3000)
}
const boilAndHashbrown = () => boilPotatoes(hashBrownify)
// cutPotatoes(boilAndHashbrown)
cutPotatoes(() => boilPotatoes(() => hashBrownify(cutPotatoes)))
// boilPotatoes()