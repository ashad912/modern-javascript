const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    
    `
    list.innerHTML += html
}

addForm.addEventListener('submit', e => {
    e.preventDefault()

    const todo = addForm.add.value.trim() //field 'add' in from
    //trim deletes white signs before and after text (not between words!!)
    //have to use replace in that case
    if(todo.length){
        generateTemplate(todo)
        addForm.reset() //clear all input fields in the form!!!
    }
    
})

//detele todos
list.addEventListener('click', (e) => {
    console.log(e)
    //.includes doe snot work - classList is not Array but DOMTokenList
    //.contains is DOMTokenList method
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})

const filterTodos = (term) =>{
    //HTMLCollection -> Array
    //to make it case insensitive added toLowerCase method
    Array.from(list.children) 
        .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(term) //todos dont include the term
        })
        .forEach((todo) => {
            todo.classList.add('filtered')
        })

    Array.from(list.children) 
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'))
    

}


//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase()
    filterTodos(term)
})