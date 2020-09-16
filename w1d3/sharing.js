const fridge = {}

fridge.pickles = { name: "pickles", quantity: "400ml", homemade: true }
const pickleJar = fridge.pickles

let pickleJarQuantity = fridge.pickles.quantity

pickleJarQuantity = "200ml"

console.log("pickleJar", pickleJarQuantity)
console.log("pickles", fridge.pickles)

/*
*  🤖 <= This is a robot
*         Give it a name: Bob
* Bob ? 🤖 Yes?
* Bob = Chicken
* Chicken ? 🤖 'sup
*/

// We assign the array [1,2,3] to the reference arbys
const arbys = [1, 2, 3]
// We give another reference to the [1,2,3] array called pirate
const pirate = arbys
// 
pirate.push(4)


const newArbys = []
for (const element of arbys) {
  newArbys.push(element)
}
const newNewArbys = [...arbys]


console.log(arbys, pirate)