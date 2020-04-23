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
const userThree = new User('shaun', 'shaun@thenetninja.co.uk')

//Class is like a blueprint for an object (it desbribes how one should be made)
//we can pass different params to create our unique instances of class

