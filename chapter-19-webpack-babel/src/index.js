//babel conversion
//node_modules/.bin/babel src/index.js -o dist/assets/bundle.js
//add -w after source (src/index.js) to run script in watch mode (automatical babel conversion after changes)

const greet = name => {
    console.log(`hello ${name}`)
}

greet('mario')
greet('luigi')
greet('link')

class User {
    constructor(){
        this.score = 0;
    }
}