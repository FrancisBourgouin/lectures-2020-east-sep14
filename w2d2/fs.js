
const fs = require('fs')
let data = ""
for (let i = 0; i < 10000000; i++) {
  data += "POTATO AWESOME "
}

console.log("before file")
// fs.writeFile('potatolove.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

fs.writeFileSync('potatosync.txt', data)
console.log('finished writing asynchronously')
console.log("after file")