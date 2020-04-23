const getTodos = (resource, callback) => {

    const req = new XMLHttpRequest() //request object builtin js

    req.addEventListener('readystatechange' , () => { 
        
        if(req.readyState === 4 && req.status === 200){ 
            const data = JSON.parse(req.responseText) //parse string to js object
            callback(undefined, data)
        }else if(req.readyState === 4){
            callback('could not fetch', undefined)
        }
    })

    req.open('GET', resource) //type, endpoint
    req.send() //send request

};

//we'd like to get data in order -> luigi, mario, shaun
//callback hell!
getTodos('todos/luigi.json', (err, data) => {
    console.log('callback fired')
    
    if (err){
        console.log(err);
    }else{
        console.log(data)
        getTodos('todos/luigi.json', (err, data) => {
            if (err){
                console.log(err);
            }else{
                console.log(data)
                getTodos('todos/shaun.json', (err, data) => {
                    if (err){
                        console.log(err);
                    }else{
                        console.log(data) //what a mess!
                    }
                })
            }
        })
    }
});


