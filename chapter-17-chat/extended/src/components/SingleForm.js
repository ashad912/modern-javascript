class SingleForm {
    constructor(container, field){
        this.form = document.querySelector(container)
        this.attachSubmitListener();
        this.field = field;
        this.callback //single callback
    }

    attachSubmitListener(){
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            const newValue = this.form[this.field].value.trim()
            this.callback(newValue)

        })
    }

    onSubmit(callback){
        this.callback = callback
    }

    reset(){
        this.form.reset()
    }
}

export default SingleForm