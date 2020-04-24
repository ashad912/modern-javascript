const userOne = {
    username: 'ryu',
    email: 'ryu@thenetninjaj.co.uk',
    login(){
        console.log('the user logged in')
    },
    logout(){
        console.log('the user logged out')
    }
}

userOne.login()

//similar user, need to almost rewrite 
const userTwo = {
    username: 'chun-li',
    email: 'chun.li@thenetninjaj.co.uk',
    login(){
        console.log('the user logged in')
    },
    logout(){
        console.log('the user logged out')
    }
}

//best solution is to create User object, like this!
//const userThree = new User('shaun', 'shaun@thenetninja.co.uk')

//Class is like a blueprint for an object (it describes how one should be made)
//we can pass different params to create our unique instances of class


//passing arg as a param to object
const login = function(){
    console.log('logged in', this.name, this) //this === user, context is ok
}

const userFour = {name: 'shaun', login}

userFour.login()

//login user as a function outside the object
login() //context is window object


