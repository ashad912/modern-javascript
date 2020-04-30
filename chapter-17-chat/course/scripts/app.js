//app.js like a glue in the app

//dom queries
const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')
const newNameForm = document.querySelector('.new-name')
const updateMssg = document.querySelector('.update-mssg')
const rooms = document.querySelector('.chat-rooms')

//add a new chat
newChatForm.addEventListener('submit', async e => {
    e.preventDefault()
    const message = newChatForm.message.value.trim()
    try{
        // chatroom init is below, but it does not matter - till submitting, all js code will have been executed
        await chatroom.addChat(message) 
        newChatForm.reset()
    }catch(e){
        console.log(e)
    }
    
})

//update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault()
    //update name via chatroom class
    const newName = newNameForm.name.value.trim()
    chatroom.updateName(newName)
    //reset the form
    newNameForm.reset()
    //show then hide the update message
    updateMssg.textContent = `Your name was updated to ${newName}.`

    setTimeout(() => {
        updateMssg.textContent = ``
    }, 3000)
})

//update the chat room
rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear()
        chatroom.updateRoom(e.target.getAttribute('id'))
        chatroom.getChats(chat => chatUI.render(chat)) //'chat' - it shoots many times, due to onSnapshot forEach!
    }
})

//check ls for a username
const username = localStorage.username ? localStorage.username : 'anon'

//class instances
const chatUI = new ChatUI(chatList) //passing ref to DOM list
const chatroom = new Chatroom('general', username)

//get chats and render
chatroom.getChats((data) => { //callback after getChats execution - passing data from 'callback(data)'
    //render UI
    chatUI.render(data) //our two classes are glued now!
})