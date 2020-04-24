
//old syntax, under the hood

function User(username, email){ //constructor, capital U is a convention
    this.username = username;
    this.email = email
    this.login = function(){ // we can add method to constructor, but it is a better way to do it - prototype
        console.log(`${this.username} has logged in`)
        return this
    } //login method is stored in constructor, not in __proto__
}


// class User {
//     constructor(username, email){ 
//         this.username = username
//         this.email = email
//     }
// login(){
//     console.log(`${this.username} just logged in`) 
//     return this
// }
// }

const userOne = new User('mario', 'mario@thenetninja.co.uk') 
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk')

console.log(userOne, userTwo)
userOne.login().login()
// the 'new' keyword
// 1 - creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor action to 'build' the object









