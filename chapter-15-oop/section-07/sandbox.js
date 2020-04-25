function User(username, email){ 
    this.username = username; //this is now Admin instance (inheritance)
    this.email = email
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

//prototype inheritance

function Admin(username, email, title){
    //call - this as reference to our new instance
    User.call(this, username, email) //call parent constructor - swap User to Admin
    //'this' in User constructor is equal to whatever we pass in which is the new object
    //that we created when we invoke new Admin
    this.title = title;
    //Admin at the minute has not any methods
}

Admin.prototype = Object.create(User.prototype) //copy User.prototype to Admin.prototype
//now Admin __proto__ has a pointer to User - Admin inherits stuff from the user
//nested __proto__ in Admin root

//deleteUser method is at the first __proto__ level
//prototype chain
Admin.prototype.deleteUser = function(user){
    //delete a user
    users = users.filter((u) => u.username != user.username)

}

const userOne = new User('mario', 'mario@thenetninja.co.uk') 
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk')
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt-ninja')

let users = [userOne, userTwo, userThree]
console.log(users)
console.log(User.prototype)

userOne.login().logout()

userThree.deleteUser(userOne)
console.log(users)


//Array prototype inherits all methods from Object prototype
//every object type in JS inherits from Object prototype 
//- it's a base type with the basic methods attached to its prototype!
//proto: XMLHttpRequest -> XMLHttpRequestEventTarget ->
// -> EventTraget -> Object (last in chain)










