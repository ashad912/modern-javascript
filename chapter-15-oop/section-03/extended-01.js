class User {
    constructor(username, email){ //building method - parameters passed during invoke
        //set up props
        this.username = username
        this.email = email
        this.forbidden = 'private field'
        this.logout = this.logout.bind(this)
        
        
    }
    //methods are defined after constuctor
    login(){
        var user = this
        return function(isAdmin){ // can use arrow function to save context
            
            console.log(`${user.username} just logged in`) //classic funtion, context must be binded
            isAdmin ? console.log('user is admin') : null
        }
    }
    logout(){
        //console.log(this)
        console.log(`${this.username} just logged out`)
        this.print('no info, if admin')
    }

    print(text){ 
        console.log(text, this)
    }
}

// the 'new' keyword
// 1 - creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor action to 'build' the object

const userOne = new User('mario', 'mario@thenetninja.co.uk') //creating single instance of class
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk')
//console.log(userOne, userTwo)

//userOne.login()
userTwo.login()(true) //method returning function which is called immediately

//userOne.logout()
userTwo.logout()

const { logout } = userTwo
logout() //logout has no context, we have bind it in class => this.logout = this.logout.bind(this)


//making forbidden as private key - PROXY

function invariant (key, action) {
    if (key === 'forbidden' || key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`)
    }
}


var handler = {
    get (target, key) {
        invariant(key, 'get')
        return target[key] //target is first Proxy param, on 
    },
    set (target, key, value) {
        invariant(key, 'set')
        return true
    }
}

console.log(userOne.username) //can access
console.log(userOne.forbidden) //can access

const userOneProxied = new Proxy(userOne, handler)
console.log(userOneProxied.username) //can access
//console.log(userOneProxied.forbidden) //CANNOT access

const userThree = new Proxy(
    new User('shaun', 'mario@thenetninja.co.uk'), 
    {
        get (target, key) {
            invariant(key, 'get')
            return target[key] //target is first Proxy param, on 
        },
        set (target, key, value) {
            invariant(key, 'set')
            return true
        }
    }
)
console.log(userThree.username) //can access
console.log(userThree._prop) //CANNOT access



//pass method name as param
const invokeMethodOnObject = (target, fn, params) => {
    console.log(this)
    try{
        target[fn](params)
    }catch(e){
        console.error(e)
    }
}

invokeMethodOnObject(userThree, 'login', [])


