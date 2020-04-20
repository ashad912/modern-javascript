//async js
//js sync -> from top to bottom
//single threaded
//blocking db req

//async
//db req is taken out of thread
//start now, finish later



console.log(1)
console.log(2)

//callback i asynchronous
setTimeout(()=> {
    console.log('callback function fired')
}, 2000)

console.log(3)
console.log(4)

//http req
//make http to api endpoints
//we get response - in json data
//jsonplaceholder.typicode.com
