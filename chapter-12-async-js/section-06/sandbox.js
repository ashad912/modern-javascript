//fetch api

//fetch buildin js

fetch('todos/luigi.json').then((res) => { //rejected only if: network error, offline, cannot reach API
    //resolved can provide error status
    return res.json() //res.json() returns promise not value - we have to support it
    //could be res.json().then(...) but we're using chaining
}).then(data => {
    console.log(data)
}).catch(err => console.log(err))







//async await fetch
//need to build async function



//async getTodos always returns a Promise!
const getTodos = async () => {
    const res = await fetch('todos/luigi.json') //stop assigning res value to getting promise resolved/rejected
    //await only stalling inside async function, it's not blocking other code in browser
    //console.log(res)
    const data = await res.json()
    //super easy chaining, in very clear way
    return data
}

console.log(getTodos()) // not resolved (without then) getTodos returns Promise
//console.log(await getTodos()) //cannot use await without async function
getTodos().then(data => console.log(data)) //we have to use then on the top level to get Promise data


//fully async await
//all packed in function and invoked

const run = async () => {
    console.log(getTodos()) // not resolved (without then) getTodos returns Promise
    console.log(await getTodos()) //now we can use await to handle getTodos() data
    getTodos().then(data => console.log(data)) //and also 'then' way
}

run()
