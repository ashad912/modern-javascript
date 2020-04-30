class RoomsUI {
    constructor(container){
        this.rooms = document.querySelector(container)
        this.attachClickListener()
        this.callbacks = [] //multiple callbacks
    }

    attachClickListener(){
        this.rooms.addEventListener('click', e => {
            if(e.target.tagName === 'BUTTON'){
                this.callbacks.forEach(s => s(e.target))
            }
        })
    }

    onUpdate(subscriber) {
        this.callbacks.push(subscriber)
    }
}

export default RoomsUI