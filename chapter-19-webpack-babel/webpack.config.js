//webpack runs only on the computer with support of node.js
//auto config of babel etc...

//npm i webpack webpack-cli --save-dev

//node_modules/.bin/webpack

//min version of code but modern code - for now lost feature of babel :<
//no -w (watch) option

const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: { //path - absolute path
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    }
};