//DOM created by browser
//browser creates 'document' object - it models HTML page
//document it is not JS object - it has HTML syntax
//document has a tons of diffrent methods and props!
//DOM - document object model has tree structure (tree of nodes)
//html - root node


//COPYING SELECTOR FROM THE BROWSER :OOO -> Copy/Copy selector (copied second p from body: body > p:nth-child(2))

const para = document.querySelector('p') // access to data - grab first p tag from top
console.log(para)


const para2 = document.querySelector('.error') // access to data - grab p with error class
console.log(para2)

const divPara = document.querySelector('div.error') //access to more specific data
console.log(divPara)


//query selector all

const paras = document.querySelectorAll('p')

//paras is a NodeList, similar to Array but it's not!
//hwvr NodeList has some Array methods or props
console.log(paras)

//access to el of nodelist
console.log(paras[2])

//Node List forEach

paras.forEach(para => console.log(para))


const errors = document.querySelectorAll('.error')

console.log(errors)


//get an element by ID
const title = document.getElementById('page-title') //withot css dots, it's included in method
console.log(title)

//get elements by name
const errors1 = document.getElementsByClassName('error') // it's plural
console.log(errors1) //we get HTMLCollection

//HTMLCollection similar to NodeList, but not the same
//we can access by element
//no forEach method
console.log(errors1[0])


//get elements by tag name

const parasTags = document.getElementsByTagName('p') //it's grab all the p tags on the page
console.log(parasTags)
console.log(parasTags[1])

