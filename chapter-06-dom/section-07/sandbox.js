const copy = document.querySelector('.copy-me')

copy.addEventListener('copy', () => {
    console.log('OI! my content is copyright')
})

const box = document.querySelector('.box')

box.addEventListener('mousemove', (e) => {
    //console.log(e.offsetX, e.offsetX)
    box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`
})

document.addEventListener('wheel', e => {
    console.log(e)
    console.log(e.pageX, e.pageY) //mouse page pos when wheel (it's not have to be scrolled)
})

//standard listener function callback - work in the same way for this case

// document.addEventListener('wheel', function(e){
//     console.log(e)
// })