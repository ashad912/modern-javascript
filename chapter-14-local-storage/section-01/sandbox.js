//storing data -> db or browser local storage
//window.localStorage <- here is local storage
//evthg in ls has to be string!

////store data
localStorage.setItem('name', 'mario')
localStorage.setItem('age', '50')

////get data - after refresh, still have it
let name = localStorage.getItem('name')
let age = Number.parseInt(localStorage.getItem('age'))

console.log(name, age)

//// updating data - just overwriting
localStorage.setItem('name', 'luigi')

//dot notation
localStorage.age = '60';

console.log(localStorage.name, parseInt(localStorage.age)) 
////deleting from ls
localStorage.removeItem('name')
console.log(localStorage.name)

//name = localStorage.name //undefined
name = localStorage.getItem('name') //null - result of method
console.log(name)


//clear all ls
localStorage.clear()
