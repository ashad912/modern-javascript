import Chatroom from './components/Chatroom.js'
import ChatUI from './components/ChatUI.js'
import RoomsUI from './components/Rooms.js'
import SingleForm from './components/SingleForm.js'
import UpdateMessageUI from './components/UpdateMessageUI.js'

//class instances
const chatUI = new ChatUI('.chat-list')
const chatroom = new Chatroom('general')
const rooms = new RoomsUI('.chat-rooms')
const newNameForm = new SingleForm('.new-name', 'name')
const newChatForm = new SingleForm('.new-chat', 'message')
const updateMssg = new UpdateMessageUI('.update-mssg')




//SUBSCRIBERS

//get chats and render
chatroom.getChats(data => chatUI.render(data))

//update the chat room
rooms.onUpdate((target) => {
    chatUI.clear()
    chatroom.updateRoom(target.getAttribute('id'))
    chatroom.getChats(chat => chatUI.render(chat))
})

//add a new chat
newChatForm.onSubmit( async (message) => {
    try{
        await chatroom.addChat(message) 
        newChatForm.reset()
    }catch(e){
        console.log(e)
    }
})

//update username
newNameForm.onSubmit((newName) => {
    chatroom.updateName(newName)
    //reset the form
    newNameForm.reset()
    //show then hide the update message
    updateMssg.update(newName)
})

