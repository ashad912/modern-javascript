//array has an object type

//new array
const arrayOne = ['shaun', 'crystal']
const arrayTwo = new Array('shaun', 'crystal')
console.log(arrayOne, arrayTwo)
//new object
const userOne = {}
const userTwo = new Object() //the same as {}
console.log(userOne, userTwo)

//object methods or props could be found under _proto key in object

//primitive types are not objects, but we can use methods on them, or taking field values
//like .length or .toUpperCase() on string
//how it works?
//JS wraps the primitive value into a wrapper object and then uses 
//different props or methods
//after that it returns only primitive result value from wrapper object

//it is done under the hood without seeing it

//object wrapping primitive string

const name = new String('ryu')

console.log(name) //now we can se length prop, and different methods

//null and undefined never have access to props or methods

//evrth can behave like an object in JS