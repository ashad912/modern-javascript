class User {
    constructor(username, email){ 
        this.username = username
        this.email = email
        this.score = 0;
    }
    
    login(){
        console.log(`${this.username} just logged in`) 
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

class Admin extends User { //inherits all the User stuff
    //if no-constructor - constructor is inherited from the User class
    //constructor
    constructor(username, email, title){
        super(username, email) //inherits from parent class
        //before we even try to add any additional props we have to call super() - it has not to contain params
        this.title = title;
    }
    deleteUser(user){
        //all elements before invoke are visible
        users = users.filter(u => u.username != user.username)
        //saving by reference
    }
}



const userOne = new User('mario', 'mario@thenetninja.co.uk') 
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk')
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt-ninja')

console.log(userThree)

let users = [userOne, userTwo, userThree]
console.log(users)


userThree.deleteUser(userTwo)
console.log(users)









