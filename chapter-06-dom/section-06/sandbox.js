const ul = document.querySelector('ul')
// ul.remove() //delete element from DOM

const button = document.querySelector('button')

button.addEventListener('click', () => { //event listener
    //ul.innerHTML += `<li>something new</li>`
    //OR
    const li = document.createElement('li')
    li.textContent = 'sth new to do'
    //appended or prepended li is not registered in listener - removing does not work at this moment
    ul.append(li); //push to end
    //ul.prepend(li) //push to start
})





const items = document.querySelectorAll('li')

//INSTEAD ASIGN SINGLE LISTENER IN UL
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         //console.log(e) //MouseEvent
//         //console.log(e.target) // more universal
//         //console.log(item)
//         //e.target.style.textDecoration = 'line-through'
//         console.log('event in LI')
//         e.stopPropagation() //stop bubbling up!
//         e.target.remove()
//     })
// })

//event bubbling - js check registred listeners from child to parent and far
//ex.: li -> ul -> body ... 

ul.addEventListener('click', e => {
    console.log('event in UL')
    console.log(e.target) //get to the li element

    if(e.target.tagName === 'LI'){
        e.target.remove()
    }

})