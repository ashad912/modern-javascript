//Class is like a blueprint for an object (it describes how one should be made)
//we can pass different params to create our unique instances of class

class User {
    constructor(username, email){ //building method - parameters passed during invoke
        //set up props
        this.username = username
        this.email = email
        this.score = 0;
        
        
    }
    //methods are defined after constuctor
    login(){
        console.log(`${this.username} just logged in`) 
        //no return -> returns undefined
        return this
    }
    logout(){
        console.log(`${this.username} just logged out`)
        return this
        
    }
    incScore(){
        this.score++
        console.log(`${this.username} has a score of ${this.score}`)
        return this
    }

}

// the 'new' keyword
// 1 - creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor action to 'build' the object

const userOne = new User('mario', 'mario@thenetninja.co.uk') //creating single instance of class
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk')
//console.log(userOne, userTwo)

// userOne.login()
// userTwo.login()

// userOne.logout()
// userTwo.logout()

userOne.incScore()
userOne.incScore().incScore()

//to chain method we have to return context to invoke next method
userOne.login().logout()







