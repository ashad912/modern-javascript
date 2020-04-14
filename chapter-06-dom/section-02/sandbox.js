const para = document.querySelector('p') //fist p from top

// console.log(para.innerText)
// para.innerText = 'ninjas are awesome' //manipulating DOM

const paras = document.querySelectorAll('p')
paras.forEach(para => {
    console.log(para.innerText)
    para.innerText += ' new text'
})

const content = document.querySelector('.content')
console.log(content.innerHTML) // all in .content div
content.innerHTML += '<h2>this is a new h2</h2>' //plus equal to append 

const people = ['mario', 'luigi', 'yoshi']

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})