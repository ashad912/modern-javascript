//babel conversion
//node_modules/.bin/babel src/index.js -o dist/assets/bundle.js
//add -w after source (src/index.js) to run script in watch mode (automatical babel conversion after changes)

// const greet = name => {
//     console.log(`hello ${name}`)
// }

// greet('mario')
// greet('luigi')
// greet('link')

// class User {
//     constructor(){
//         this.score = 0;
//     }
// }

//import <- run it first! but it doesn't share variables and functions
//import './dom'

//need to import functions/variables directly
import users, {getPremUsers} from './data' //whatever name for import 'export default'
import {styleBody, addTitle, contact} from './dom' //no need to specify that this is a js file

console.log(users)
console.log(getPremUsers(users))

console.log('index file')
addTitle('test 1')
styleBody()
console.log(contact)