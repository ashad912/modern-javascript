const content = document.querySelector('p')

// console.log(content.classList) //get content classes //DOMTokenList
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');


const pTags = document.querySelectorAll('p')

//innerText get only visible text - wouldn't get text effeted by display: none
//textContent get all text - even hidden

pTags.forEach((pTag) => {
    if(pTag.textContent.includes('error')){
        pTag.classList.add('error')
    }else if(pTag.textContent.includes('success')){
        pTag.classList.add('success')
    }
})

//toggle class
const title = document.querySelector('.title')
title.classList.toggle('test') //if has, remove
title.classList.toggle('test') //if has not, append