const scores = [10, 30, 15, 25, 50, 40, 5]

//filter
const filtered = scores.filter((score) => { //non-destructive - making new array as result
    return score > 20
})

console.log(filtered)

const users = [
    {name: 'shaun', premium: false},
    {name: 'yoshi', premium: true},
    {name: 'mario', premium: true},
    {name: 'chun-li', premium: false},
]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers)




//map - edit each item, and push to new array
const prices = [20, 10, 30, 25, 15, 40, 80, 5]

// const salePrices = prices.map((price) => {
//     return price / 2;
// })

const salePrices = prices.map(price => price / 2)
console.log(salePrices)

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
]

const newProducts = products.map((product) => { //take directly orginal object, not copy!
    // if(product.price > 30){
    //     product.price /= 2; //we just edited original array!!!!!!
    // }
    // return product
    if(product.price > 30){
        return {name: product.name, price: product.price / 2}
    }
    return product
})
console.log(products)
console.log(newProducts)



//reduce
const scores2 = [10, 20, 60, 40, 70, 90, 30]

const result = scores2.reduce((acc, curr) => { //after loop (all elements), acc in saved in result
    //acc is remembered value through all loop
    if(curr > 50){
        acc ++
    }
    return acc; //return acc ana go to next loop
}, 0) //here is initial value of 'acc'

console.log(result) //counter 3 value great than 50

const scores3 = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70}, //mario again
    {player: 'crystal', score: 60},
    {player: 'mario', score: 80}, //mario again
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 90}, //mario again
    {player: 'crystal', score: 60},
    {player: 'mario', score: 10}, //mario again
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 110}, //mario again
    {player: 'crystal', score: 60},
]

const marioResult = scores3.reduce((acc, curr) => {
    if(curr.player === 'mario'){
        acc += curr.score
    }
    return acc
}, 0)

console.log(marioResult)

//find
const scores4 = [10, 5, 0, 40, 60, 10, 20, 70]

const firstHighScore = scores4.find((score) => {
    return score > 50
})

console.log(firstHighScore)


//sort 
//can be aplied on origin array - destructive

const namesToSort = ['mario', 'shaun', 'chan-li', 'yoshi', 'luigi'] 

const newNames = namesToSort.sort() // automatically sort in alphabetical order
console.log(newNames)

//.reverse to reverse array

const scoresToSort = [10, 50, 20, 5, 35, 70, 45];

scoresToSort.sort() //by default sorts looking on first number of each elements

console.log(scoresToSort)


const players = [
    {player: 'mario', score: 20, attempts: 2},
    {player: 'luigi', score: 10, attempts: 2},
    {player: 'chun-li', score: 50, attempts: 2}, //mario again
    {player: 'yoshi', score: 50, attempts: 1},
    {player: 'shaun', score: 50, attempts: 3}
]

// players.sort((a,b) => {
//     //a one of elements
//     //b another of elements
//     //compare a and b to decide what comes first
//     //to sort decresing
//     //if a should come first we have to return negative number
//     //if b should come first we have to return positive number
//     //if neither a nor b come first we have to return zero
//     if(a.score > b.score){
//         return 1
//     }else if(b.score > a.score){
//         return -1
//     }else {
//         return 0
//     }
// })

//equivalent++

players.sort((a,b) => b.score - a.score || a.attempts - b.attempts) //injected sorting
//if we got zero (no reorder) -> check attempts condition

console.log(players)

//chaining arrays

const products2 = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
]

const promos = products2
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`)

console.log(promos)