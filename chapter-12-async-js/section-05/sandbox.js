const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest() //request object builtin js

        req.addEventListener('readystatechange' , () => { 
            
            if(req.readyState === 4 && req.status === 200){ 
                const data = JSON.parse(req.responseText) //parse string to js object
                resolve(data)
            }else if(req.readyState === 4){
                reject('could not fetch')
            }
        })
    
        req.open('GET', resource) //type, endpoint
        req.send() //send request
    })
    

};

//promise chaining
getTodos('todos/luigi.json').then(data => {
    console.log('promise 1 resolved', data)
    return getTodos('todos/mario.json')
}).then(data => {
    console.log('promise 2 resolved', data)
    return getTodos('todos/shaun.json')
}).then(data => {
    console.log('promise 3 resolved', data)
}).catch(err => { //catch any error, all promises - ex: first and sec succeed and consoled, third throws error
    console.log('promise rejected', err)
})



//single promise
// getTodos('todos/luigi.json').then(data => {
//     console.log('promise resolved', data)
// }).catch(err => {
//     console.log('promise rejected', err)
// })

//promise example

// const getSth = () => {
//     return new Promise((resolve, reject) => { //res, rej bultin Promise API
//         // fetch sth
//         //resolve('some data');
//         reject('some error')
//     })
// }

// //first callback on resolve, second on reject
// // getSth().then((data) => { //data we've passed through to the resolve function
// //     console.log(data)
// // }, (err) => {
// //     console.log(err)
// // })

// //above it's equivalent to this:

// getSth().then(data => {
//     console.log(data)
// }).catch(err => console.log(err))
