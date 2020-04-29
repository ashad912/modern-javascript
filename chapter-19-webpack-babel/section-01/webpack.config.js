//webpack runs only on the computer with support of node.js
//auto config of babel etc...

//npm i webpack webpack-cli --save-dev

//node_modules/.bin/webpack

//min version of code but modern code - for now lost feature of babel :<
//-w (watch option) - TO SPECIFY IN package.json

//before server: "webpack": "node_modules/.bin/webpack -w",

//webpack dev server!!
//npm i webpack-dev-server

//need to define dev (faster, not optimized) and prod (slower, optimized) modes for webpack
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: { //path - absolute path
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    //it serves up our files inside this public path to the browser
    //it does not actually serve the real physical files inside it
    //it is serve virtual files that it stores in memory and it uses publicPath to serve it to 'assets'
    //it does not have to write manually our changes to distribution folder
    //it does not rebuild all files physically!
    //no physical manifestation of files
    //can see numbers of lines in log from non-bundles files
    //great for dev, not for deploy
    devServer: { 
        contentBase: path.resolve(__dirname, 'dist'), //absolute
        publicPath: '/assets/'
    },
    module: {
        rules: [ //specify what files, we want to run through babel loader
            {
                test: /\.js$/, //files with end ".js"
                exclude: /node_modules/, //exclude .js files from node_modules
                use: { //what to use?
                    loader: 'babel-loader', 
                    options: { //the same what in '.babelrc' - this file is not used anymore
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
    
};