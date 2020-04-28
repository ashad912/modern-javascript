"use strict";

var _this = void 0;

//babeljs.io - convert modern js features to old js
//npm init
//npm i @babel/core @babel/cli --save-dev
//npm i @babel/preset-env --save-dev
//.babelrc - here define what preset we want to use
// {
//     "presets": ["@babel/preset-env"]
// }
//node_modules/.bin/babel before.js -o after.js
var greet = function greet(name) {
  console.log(_this);
  console.log("heelo ".concat(name));
};

greet();
