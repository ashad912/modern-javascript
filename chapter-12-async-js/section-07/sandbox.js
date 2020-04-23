
const getTodos = async () => {
    //error can be throw due to rejected below Promises: fetch and res.json
    //additional source of error is invalid res.status
    const res = await fetch('todos/luigi.json') //throwing default fetch error

    //we want to be sure, that we got valid data - have to check res.status
    if(res.status !== 200){
        throw new Error('cannot fetch the data')
    }

    //if would we additionally handle res.json Promise rejected, we would have to use try/catch
    

    //by default res.json return own error to catch
    //to test res.json() error, need to spoil luigi.json
    const data = await res.json()
    return data
    
}

//then error hadling
getTodos()
    .then(data => console.log(data))
    .catch(e => console.log(e.message))


//fully async/await error handling - need to use try catch block
const run = async () => {
    try{
        const data = await getTodos()
        console.log(data)
    }catch(e){
        console.log(e.message)
    }
    
}
run()

////////////////////

//more precise error hanling
const getTodosExtended = async () => {
    
    //let res
    try{
        //res = await fetch('todos/luigi.json') //it is nested, we have to take (let) res higher ...
        var res = await fetch('todos/luigi.json') //... or use var
        //var res = await fetch('https://dupaadasu') //catch case, cannot reach domain - fetch Promise rejected
    }catch(e){
        e.message += '. Very bad!'
        throw e //pass default error with modified 'message' key
    }
    
    //additional res check for let res!!!
    // if(res !== undefined && res.status !== 200){
    //     throw new Error('cannot fetch the data')
    // }

    //no additional res check for var
    if(res.status !== 200){
        throw new Error('cannot fetch the data')
    }

    //using try/catch
    //to test res.json() error, need to spoil luigi.json
    try{
        const data = await res.json()
        return data
    }catch(e){
        console.log('additional console.log for this error') 
        console.log(Object.getOwnPropertyNames(e)) // all props in Error object - not standard js object 
        //here we can manipulate our error
        e.message += '. Adding info to default message!'
        e.name = 'myName'
        e.myKey = "it's my key!!!" //new own key
        throw e //pass deafault res.json error with modified keys
    }
}

getTodosExtended() //all Promises rejected status handled separatly
    .then(data => console.log(data))
    .catch(e => console.log(e.message, e.name, e.myKey)) //addtional prop