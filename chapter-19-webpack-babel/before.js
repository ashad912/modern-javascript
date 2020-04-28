//babeljs.io - convert modern js features to old js

//npm init
//npm i @babel/core @babel/cli --save-dev
//npm i @babel/preset-env --save-dev

//.babelrc - here define what preset we want to use
// {
//     "presets": ["@babel/preset-env"]
// }

//babel conversion
//node_modules/.bin/babel before.js -o after.js

//npm i - install all packages from package.json file

const greet = (name) => {
    console.log(this)
    console.log(`heelo ${name}`)
}

greet();