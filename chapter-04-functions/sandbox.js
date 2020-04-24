

greet() // thank's to hoisting - can be at the top

//function declaration - can be hoisted
function greet(){
    console.log('hello')
}


//arrow functions aren't hoisted!!!



//function expression - cannot be hoisted
const speak = function(name = 'Luigi', time = 'night'){ //save function in variable, default to params!
    console.log(`good ${time} ${name}`)
} 
//cannot access funcion param ouside funcion scope!

speak('Mario', 'morning') //cannot be on top - it's variable
speak() //no params, we get defaults
speak('Shaun') //time param will be default

const calcArea = function(radius){
    return 3.14 * radius**2
}

const calcVol = function(area, height){
    return area * height
}

const a = calcArea(5)
console.log(a)

console.log(calcVol(a, 5))


//arrow func
const calc = (radius) => { //one param, able avoid parentheses
    return 3.14 * radius**2
}

const calc2 = radius => 3.14 * radius**2 // one param, one line in scope, fast return without keyword 

//methods vs functions
//functions

const halo = () => 'halo'

let resultOne = halo()

console.log(resultOne)

//methods - invoked on object or datatype!

let name = 'halko'
let upperName = name.toUpperCase()

console.log(upperName)

//callbacks & foreach

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value)
}

// myFunc(function(value){ //passing function as a param
//     //do sth
//     console.log(value)
// })

myFunc((value) => {
    console.log(value)
}) 


let ninjas = ['mario', 'luigi', 'ryu', 'shaun']

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
}
ninjas.forEach(logPerson) //pass function as param to callback - it takes args of forEach callback

//ul ref
const ul = document.querySelector('.people') //get DOM element ref

const people = ['mario', 'luigi', 'ryu', 'shaun']

let html = ``;

people.forEach((person) => {
    html += `<li style="color: purple">${person}</li>`
})

console.log(html)

ul.innerHTML = html //modify DOM - inner: inside ul, outer: with ul start and end tags !!!


///scope
function testFn(){ //function has info about all visible variables before invoke
    console.log(temp1) //global var
    //console.log(temp2) //cannot acces before init
}

let temp1 = 'temp1'
testFn()
let temp2 = 'temp2'