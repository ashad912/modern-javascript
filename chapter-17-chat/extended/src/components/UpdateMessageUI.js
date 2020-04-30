class UpdateMessage {
    constructor(container){
        this.message = document.querySelector('.update-mssg')
        this.timer
    }

    update(newName){
        clearTimeout(this.timer)
        this.message.textContent = `Your name was updated to ${newName}.`

        this.timer = setTimeout(() => {
            this.message.textContent = ``
        }, 3000)
    }
}

export default UpdateMessage