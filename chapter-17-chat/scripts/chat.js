// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats') //storing ref to firebase chats collection 
        this.unsub //undefined
    }
    addChat = async(message) => {
        //format a chat object
        const now = new Date()
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        //save the chat document
        const res = await this.chats.add(chat);
        return res //or return this for method chaining
    }
    getChats = (callback) => {
        this.unsub = this.chats //return function to unsubsribe onSnapshot listener
            .where('room', '==', this.room) // complex query - watch specific room - equation (we use double equals in fb)
            .orderBy('created_at') //orderBy query requires the index
            .onSnapshot(snapshot => { //invoked once, ready for changes! react on changes in callback!
                snapshot.docChanges().forEach((change) => {
                    if(change.type === 'added'){
                        callback(change.doc.data())
                    }else if(change.type === 'removed'){

                    }
                })
            })
    }
    updateName(username){
        this.username = username //local storage issue later
        localStorage.username = username //set ls
    }
    updateRoom(room){
        this.room = room
        console.log('room updated')
        //here also need to reset onShapshot listner!
        if(this.unsub){ //can be undefined!
            this.unsub() //unsubsribe onSnapshot listener
        }
        //return this //method chaining
        
    }
}

//const chatroom = new Chatroom('general', 'shaun')

// chatroom.addChat('hello everyone')
//     .then(()=>console.log('chat added'))
//     .catch(e => console.log(e))

// chatroom.getChats((data) => { //callback after getChats execution - passing data from 'callback(data)'
//     console.log(data)
// })

// setTimeout(() => { //emulate room changinh
    
//     chatroom.updateRoom('gaming')
//     chatroom.updateName('yoshi')
//     chatroom.getChats((data) => { //listener active
//         console.log(data)
//     })
//     chatroom.addChat('hello') //new chat!
// }, 3000)
