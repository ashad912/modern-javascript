const link = document.querySelector('a')

console.log(link.getAttribute('href')) //get google.com

link.setAttribute('href', 'https://www.thenetninja.co.uk')
link.innerText = 'The Net Ninja Website'

const mssg = document.querySelector('p')
console.log(mssg.getAttribute('class')) // get p class = 'error'

mssg.setAttribute('class', 'success')
console.log(mssg.getAttribute('class'))

mssg.setAttribute('style', 'color: green;') //even it does not exist, js make it real

//setAttribute overwrites attribute - of course we can get value and set new value as concat, but it's easier way

const title = document.querySelector('h1')
console.log(title.style) //CSS Style Declaration

console.log(title.style.color)
title.style.margin = '50px'
title.style.color = 'green';
title.style.fontSize = '60px' //font-size in CSS, fontSize in JS

//clearing
title.style.margin = ''
console.log(title.style.color)