// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored
// $ node sum.js 1 2 3 4 5 => 15
// $ node sum.js 1 2 3 4 bob 5 => 15

// Plan!

// I need to generate a list of numbers (array)
const listOfArguments = process.argv.slice(2); //something coming from process object (argv)
const listOfNumbers = [1, 2, 3, 4, 5];

console.log(listOfArguments);

const transformEachArgumentToNumbers = function (argumentArray) {
  // Create an accumulator array
  const output = [];
  // Iterate over the arguments and add transform them into numbers
  for (let i = 0; i < argumentArray.length; i++) {

    // the argument should be a number, convert all arguments to numbers
    const convertedValue = Number(argumentArray[i]);
    // Add the converted value to the array using the .push method
    output.push(convertedValue);
  }

  // return the value of the accumulator called output
  return output
};

console.log(transformEachArgumentToNumbers(listOfArguments));

const sumOfNumbers = function (listOfNumbers) {
  // number accumulator!
  let output = 0;
  // Iterate over the numbers and add them together
  for (let i = 0; i < listOfNumbers.length; i++) {
    // However, we want to skip NaN values  
    if (!Number.isNaN(listOfNumbers[i])) {
      // outpout[i]
      output += listOfNumbers[i]
    }
  }
  return output
};

const parsedNumbers = transformEachArgumentToNumbers(listOfArguments)
const result = sumOfNumbers(parsedNumbers);
console.log(result)

// let output = 0
// for(let i = 0; i < process.argv.length; i++){
//   if(Number.isNaN(Number(process.argv[i]))){
//     output += Number(process.argv[i])
//   }
// }