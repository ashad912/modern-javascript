const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'shaun'},
];


localStorage.todos = JSON.stringify(todos)
//alternative
//localStorage.setItem('todos', JSON.stringify(todos))

const lsTodos = JSON.parse(localStorage.todos) //or getItem

console.log(lsTodos)