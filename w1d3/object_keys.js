const joesObject = {
  glasses: true,
  student: true,
  student_id: "JOE123"
};

const andrewsObject = {
  glasses: false,
  student: false,
  student_id: "ANDIIIIIIIIIIIII"
};

andrewsObject.glasses = true;

const francisProps = {
  "😎": true
}

francisProps["😎"]

const studentList = [joesObject, andrewsObject];


andrewsObject.glasses
andrewsObject["glasses"]

const keyToCheck = "glasses"

joesObject[keyToCheck]


const fridge = {}

fridge.pickles = { name: "pickles", quantity: "400ml", homemade: true }
fridge.pickles = { name: "pickles", quantity: "400ml", homemade: { is_homemade: true, with_mom: { name: "Johanne", made_with_mom: true } } }

console.log(fridge)
