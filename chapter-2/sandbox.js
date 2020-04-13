let age = 25;
const year = 2019;
var points = 100;

console.log(age, year, points)

//comment
/* block
    comment */

/* JS Data Types
    Number
    String
    Boolean
    Null
    Undefined
    Object - Literals etc.
    Symbols - unieque identifiers
*/

// Strings -> first char: myString[0]
// props, methods after "."
// toUpperCase is not overiding the original variable
//.indexOf('') - finding first index in string
// methods - functions belong to specific object
// lastIndexOf('') - finding last char in string
// slice(x, y) - x - slice from; y - slice to
// substr(x, y) - x - start pos, y - take y chars
// replace(x, y) - replace x to y


// Numbers
// math - ** pow, % remain
// B I D M A S (I - indices for power)
// op shorts - ++ += etc.
// NaN - operation with no sense
// template string
// html templates 
    
    const title = 'Adventures'
    const author = 'Mario'
    const likes = 30

    let html = `
        <h2>${title}</h2>
        <p>By ${author}</p>
        <span>This blog has ${likes} likes</span>
    `

    console.log(html)

// Arrays
// ninjas[x] = 'new value'
// mixed arrays ['shaun', 'crystal', 20, 30]
// methods:
    let ninjas = ['shaun', 'ryu', 'chun-li']
    let result = ninjas.join(',') //join all elements of arrays together with commna betweeen
    console.log(result)
// indexOf - first in arr
// concat() - join two arrays together
// push() - push new el to arr
// let result = ninjas.push('ken') <- in result we get new length
// pop() - take off last array el


//Null, undefined

    // let sth; //undefined
    // console.log(sth, sth + 3, `the sth is ${sth}`)
    let sth = null; //null
    console.log(sth, sth + 3, `the sth is ${sth}`) //null + 3 gives 3!

// Boolean
// includes() - on str, arr
// == comparison
// string comparison
    let name = 'shaun'
    console.log(name > 'crystal') //true, s comes later in alphabet than c
    console.log(name > 'Shaun') //true, s are greater than S in JS
    console.log(name > 'Ctystal') //true, lowercase always greater than uppercase in JS

//loose, strict comparison
//type conversion (explicit)
    console.log('100' + 1) // '1001', string more important
    console.log(Number('100') + 1) //101, conversion
    console.log(typeof (Number('100') + 1)) //number 
    //Number('hello') NaN
    console.log(1 + '100') //'1100', string more important
    console.log(String(1) + '100') // '1100', conversion (unneccesary)
    console.log(typeof (String(1) + '100')) //string
//boolean conversion
    //truthy, falsy values
    console.log(Boolean(0)) //false
    console.log(Boolean('')) //false
    console.log(Boolean(3)) //true
    console.log(Boolean('s')) //true

