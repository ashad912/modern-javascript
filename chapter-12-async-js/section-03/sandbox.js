const getTodos = (callback) => {

    const req = new XMLHttpRequest() //request object builtin js

    req.addEventListener('readystatechange' , () => { 
        
        if(req.readyState === 4 && req.status === 200){ 
            const data = JSON.parse(req.responseText) //parse string to js object
            callback(undefined, data)
        }else if(req.readyState === 4){
            callback('could not fetch', undefined)
        }
    })
    //i can try to get local json, by relative path

    //req.open('GET', 'https://jsonplaceholder.typicode.com/todos/') //type, endpoint
    req.open('GET', 'todos.json') //type, endpoint
    req.send() //send request

};

console.log(1)

//callback is async - start now, finish later
//more flexible, each time we do sth else
getTodos((err, data) => { //convention: error first!
    console.log('callback fired')
    
    if (err){
        console.log(err);
    }else{
        console.log(data)
    }
});

console.log(2)

//JSON transfering data between server and client - always as text!!! in string
//making own json - todos.json
//cannot comment there

//json keys and strings in double quotes
//bools and numbers normally
//last el in arr without comma
