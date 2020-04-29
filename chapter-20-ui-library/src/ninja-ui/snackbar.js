import './styles/snackbar.css'

//timer clearTimeout update
class Snackbar {
    constructor(){
        this.snackbar = document.createElement('div')
        this.timer
    }
    init(){
        this.snackbar.classList.add('snackbar')
        document.querySelector('body').appendChild(this.snackbar)

    }
    show(message){
        clearTimeout(this.timer)
        this.snackbar.textContent = message;
        this.snackbar.classList.add('active')

        this.timer = setTimeout(() => {
            this.snackbar.classList.remove('active')
        }, 4000)
    }
}

export default Snackbar