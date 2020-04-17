//siblings originate from the same node (of DOM tree) and are on the same level 

//refs to children

const article = document.querySelector('article')
console.log(article.children) //we need to convert HTML Collection to array - can't use forEach method
console.log(Array.from(article.children)) //got it

Array.from(article.children).forEach((child) => {
    child.classList.add('article-element') //all tags in have aricle-element class
})

const title = document.querySelector('h2')

console.log(title.parentElement) //get to the parent
console.log(title.parentElement.parentElement) //get to the grandparent!
console.log(title.nextElementSibling);
console.log(title.previousElementSibling); //if exists

console.log(title.nextElementSibling.parentElement.children) //can travel



