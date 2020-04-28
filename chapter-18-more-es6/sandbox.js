//rest parameter
//allow to bundle up argumetns inside a function into a single array parameter
const double = (...nums) => { //take all params and bundle it into a single array parameter
    console.log(nums)
    return nums.map(num => num*2)
}

const result = double(1,3,5,7,9,2)
console.log(result)

//spread syntax (arrays)
const people = ['shaun', 'ryu', 'crystal']
console.log(...people)

const members = ['mario', 'chun-li', ...people]
console.log(members)

//spread syntax (objects)
const person = { name: 'shaun', age: 30, job: 'net ninja'}
//const personClone = person //pass reference, not copy :(
const personClone = {...person, location: 'manchester'} //full copy, with extra :)

console.log(personClone)


//sets
//like arrays but with unique values - MASSIVE OVERSIMPLIFICATION

const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun']
console.log(namesArray)

//const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun'])
// const namesSet = new Set(namesArray)
// console.log(namesSet)

//const uniqueNames = [...namesSet]
const uniqueNames = [...new Set(namesArray)]
console.log(uniqueNames)

//cant use push method on Set 
//cant use length prop 

const ages = new Set()
ages.add(20) // add element
ages.add(25).add(30)
ages.add(25)
ages.delete(25) //value are unique so we can exacly pass element to remove!

console.log(ages, ages.size) //size like length
console.log(ages.has(30)) //.has -> boolean

ages.clear()

console.log(ages)

//Set is iterable, can use forEach

const ninjas = new Set([
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 29},
    {name: 'chun-li', age: 32}
])

ninjas.forEach(ninja => console.log(ninja.name, ninja.age))


//Symbol - completly unique
//no two symbols can ever be the same

const symbolOne = Symbol('a generic name') //primitive type
const symbolTwo = Symbol('a generic name')

console.log(symbolOne, symbolTwo, typeof symbolOne)
console.log(symbolOne == symbolTwo, symbolOne === symbolTwo)

//can be used as keys

const ninja = {}

ninja.age = 30;
ninja['belt'] = 'orange'

ninja['belt'] = 'black'

ninja[symbolOne] = 'ryu'
ninja[symbolTwo] = 'shaun'

console.log(ninja) //symbols always unique inside the JS engine, can't use symbol if u don't have the reference

//usage:
//https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/
//1. As a unique value where you’d probably normally use a String or Integer:
// log.levels = {
//     DEBUG: Symbol('debug'),
//     INFO: Symbol('info'),
//     WARN: Symbol('warn'),
// };
// log(log.levels.DEBUG, 'debug message');
// log(log.levels.INFO, 'info message');

//2. A place to put metadata values in an Object
//3. Giving developers ability to add hooks to their objects, through your API

//known Symbols

//Symbol.hasInstance: instanceof //check if instance has passed constructor prop in __proto__ chain
// class MyClass {
//     static [Symbol.hasInstance](lho) {
//         return Array.isArray(lho);
//     }
// }
// assert([] instanceof MyClass);

console.log('1' instanceof Object) //false
console.log([] instanceof Object) //true
console.log('1' instanceof String) //false, not for primitives
console.log(null instanceof Object) //false
// //Symbol.iterator
// var myArray = [1,2,3];

// // with `for of`
// for(var value of myArray) {
//     console.log(value);
// }

// // without `for of`
// var _myArray = myArray[Symbol.iterator]();
// while(var _iteration = _myArray.next()) {
//     if (_iteration.done) {
//         break;
//     }
//     var value = _iteration.value;
//     console.log(value);
// }

// Symbol.iterator will allow you to override the of operator 
// - meaning if you make a library that uses it, developers will love you:

// class Collection {
//     *[Symbol.iterator]() {
//       var i = 0;
//       while(this[i] !== undefined) {
//         yield this[i];
//         ++i;
//       }
//     }
  
//   }
//   var myCollection = new Collection();
//   myCollection[0] = 1;
//   myCollection[1] = 2;
//   for(var value of myCollection) {
//       console.log(value); // 1, then 2
//   }


class MyReplacer {
    constructor(value) {
        this.value = value;
    }
    //overwriting replace method
    [Symbol.replace](string, replacer) {
        // console.log(this)
        // console.log(string, replacer)
        var index = string.indexOf(this.value);
        if (index === -1) {
            return string;
        }
        if (typeof replacer === 'function') {
            replacer = replacer.call(/*undefined, this.value, string*/);
        }
        return `${string.slice(0, index)}${replacer}${string.slice(index + this.value.length)}`;
    }
}
var fooReplaced = 'foobar'.replace(new MyReplacer('foo'), 'baz');
var barReplaced = 'foobar'.replace(new MyReplacer('bar'), function () { return 'baz' });
console.log(fooReplaced, barReplaced)
// assert.equal(fooReplaced, 'bazbar');
// assert.equal(barReplaced, 'foobaz');


//enhanced object literals

// var name = "make";
// var i = 0;
// const laptop = {
//     [name + ++i]: "Apple",
//     [name + ++i]: "Dell",
//     [name + ++i]: "HP"
// }

// console.log(laptop.make1);//"Apple"
// console.log(laptop.make2);//"Dell"
// console.log(laptop.make3);//"HP"