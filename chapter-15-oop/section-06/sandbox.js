function User(username, email){ 
    this.username = username;
    this.email = email
    // this.login = function(){ // we can add method to constructor, but it is a better way to do it - prototype
    //     console.log(`${this.username} has logged in`)
    //     return this
    // } //login method is stored in constructor then, not in __proto__
}

//add method to our prototype
User.prototype.login = function(){
    console.log(`${this.username} has logged in`) //this refers to instance of the object that we use in this method on
    return this
}

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`) 
    return this
}


const userOne = new User('mario', 'mario@thenetninja.co.uk') 
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk')

console.log(userOne, userTwo)
console.log(User.prototype)

//__proto__
//proto stores all methods defined on object
//methods are proxies on the top level of the object (to the root)

//__proto__ actually points to the prototype for the object type 
//new Array __proto__ -> Array prototype sort() filter () etc
//all Array methods are stored in central store - prototype
//Array instances don't store the methods, they only know about its!

//benefits storing methods on a prototype instead of on every individual object that we create:
// - more efficient
// - it is neccessary to prototype inheritanace

//to see prototype: Array.prototype, Date.prototype etc.










