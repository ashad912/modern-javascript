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

//reduce - destructive ??

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