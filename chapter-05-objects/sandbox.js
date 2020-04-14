//object literals


let user = {
    name: 'crystal',
    age: 30,
    blogs: [
        {title: 'first', likes: 10},
        {title: 'second', likes: 20}
    ],
    login(){ //shorter way - STILL regular 
        console.log('the user logged in')
    },
    logBlogs: function(){ //how to get to user.blogs ??? method/this issue
        //this keyword is a context object and it's represents the context in which the current code is executed
        //this inside root of doc - it's refer to global context -> window object
        
        console.log('this user has written the following blogs:')
        this.blogs.forEach(blog => console.log(blog.title, blog.likes))
    },
    log: function(){ //own method, working as console.log(user)
        console.log(this)
    },
    showArrowMethod: () => {
        //for arrow function 'this' DOES NOT CHANGE previous context
        //in our case - 'this' keeps global window context
        console.log(this)
    }
}

console.log(this) //global context - Window

console.log(typeof user)

//dot notation
console.log(user.name)

//square bracket notation - way to pass var
const key = 'name'
console.log(user[key])
console.log(user['name'])

user.login() //invoke object method

user.log() //own method, working as console.log(user)

user.logBlogs()

user.showArrowMethod()




//Math object

console.log(Math)
// round() - round to integer (up or down)
// floor() - cut to integer (only down)
// ceil() - round up to integer
// trunc() - if number positive trunc() is eq to floor()
//           if number negative trunc() is eq to ceil()

const posNumber = 7.2
const negNumber = -7.2

console.log(Math.floor(posNumber), Math.ceil(negNumber))
console.log(Math.trunc(posNumber), Math.trunc(negNumber))

//random() - greater or equal than 0 and lower than 1 (float)

console.log(Math.round(Math.random()*100)) //get random integer 0 - 100! (no 1 to 100) 
                                           //0 if random == 0.001
                                           //100 if random == 0.999




//primitive or reference of types

//primitives - store on the stack (quicker)
//references - store in the heap (slower, more advanced)

//STACK STORES POINTERS TO THE HEAP! (for ref types)

//assignment (copying) for primitives adds posistion in stack (two vars have not common position in the stack)
//assignment for ref types does not create additional object on the heap - it's only adds pointer position to the stack
//we refer to the same object, by two pointes

//primitives
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)

scoreOne = 100;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)

//refs

const userOne = {name: 'ryu', age: 30}
const userTwo = userOne;

console.log(userOne, userTwo)

userOne.age = 40; //update one object on the heap, userTwo.age do the same thing

console.log(userOne, userTwo)



