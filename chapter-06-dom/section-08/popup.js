const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.popup-close')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

close.addEventListener('click', () => {
    popup.style.display = 'none'
})

popup.addEventListener('click', (e) => {
    if(e.toElement.className.includes('popup-wrapper')){//close only if click is directly popup-wrapper div
        popup.style.display = 'none'
    }
    //OR
    // if(e.path[0].className === 'popup-wrapper'){ 
    //     popup.style.display = 'none'
    // }
    
})