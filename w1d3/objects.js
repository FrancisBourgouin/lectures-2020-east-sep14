const superObject = {
  0: 'a',
  1: 'b',
  2: 'c'
}

const joesArray = [true, true, "JOE123"];

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

const studentList = [joesObject, andrewsObject];

console.log(typeof superObject)
console.log(Array.isArray(superObject))