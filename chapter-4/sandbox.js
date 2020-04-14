

greet() // thank's to hoisting - can be at the top

//function declaration - can be hoisted
function greet(){
    console.log('hello')
}




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