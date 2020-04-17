const form = document.querySelector('.signup-form')
//const username = document.querySelector('#username') //it's easier way in forms
const feedback = document.querySelector('.feedback')

const usernamePattern = /^[a-zA-Z]{6,12}$/

//submit react on click and 'enter'!!!

form.addEventListener('submit', (e) => {
    //default action is refreshing
    e.preventDefault(); //prevent event action
    //console.log(username.value) //get text inside
    //console.log(form.username.value) //get text inside form

    //validation
    const username = form.username.value

    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'that username is valid!'
    }else{
        // feedback help info
        feedback.textContent = 'username must contain letters only & be between 6 & 12 chars long'
    }

})
//regular expressions
//^ - only if start
//$ - only if end
//[] - group (range) of characters we want to match
//{} - how many chars we want to match
// . - any char

//^[a-zA-Z]{6,10}$ - all letters, word from 6 to 10 chars length
//^.{6-10}$ - any chars, word from 6 to 10 chars length

const username = 'shaunp' //'@jsssjaunp23@ - still pass without '^' or '$'
const pattern = /^[a-z]{6,}$/ //at least 6

//let result = pattern.test(username) //RegEx method

// if(result){
//     console.log('regex test passed :)')
// }else{
//     console.log('regex test failed :(')
// }

let result = username.search(pattern) //string method
//.search retuns position of match!!! 0 when first char, 2 when third char
console.log(result)

//live feedback

form.username.addEventListener('keyup', (e) => {
    //e is KeyboardEvent -> have knowledge what was pressed - specific key, and if any alt, shift, ctrl key also was pressed
    console.log(e)
    //form.username === e.target - in this case
    //const username = form.username.value //the same as e.target.value
    const username = e.target.value
    

    if(usernamePattern.test(username)){
        // feedback good info

        //by .style
        //e.target.style.border = '2px solid green'

        //by CSS class
        e.target.setAttribute('class', 'success')
    }else{
        // feedback help info

        //by .style
        //e.target.style.border = '2px solid red'

        //by CSS class
        e.target.setAttribute('class', 'error')
    }
})
