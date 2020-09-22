// Function & Callback recap

// hoistedBob()

// function hoistedBob() {

// }

// const bob = function () {

// }

// bob()

// const arrowBob = () => {

// }

// functionWithCallback(value => console.log(value))
// functionWithCallback(function (value) {
//   console.log(value)
// })



// Callback


const logEveryNumber = function (listOfNumbers) {
  for (const number of listOfNumbers) {
    console.log(`🎵🎶${number}🎵🎶`)
  }
}

logEveryNumber([1, 2, 3, 4, 5])

const logEveryNumberCB = function (listOfNumbers, action) {
  for (const number of listOfNumbers) {
    action(number)
  }
}

logEveryNumberCB([1, 2, 3, 4, 5], number => console.log(`🎵🎶${number}🎵🎶`))
logEveryNumberCB([1, 2, 3, 4, 5], number => console.log(`🤖🤖${number}🤖🤖`))

let accumulator = 0
logEveryNumberCB([1, 2, 3, 4, 5], number => accumulator += number)
console.log(accumulator)



const logEveryNumberCBWithAVengeance = function (listOfNumbers, actionCB, conditionCB) {
  for (const number of listOfNumbers) {
    if (conditionCB(number)) {
      actionCB(number)
    }
  }
}

const fireNumber = number => console.log(`🔥🔥${number}🔥🔥`)
const biggerThanTwoCheck = number => number > 2

logEveryNumberCBWithAVengeance([2, 2, 2, 3, 4, 4, 5, 6], fireNumber, biggerThanTwoCheck)