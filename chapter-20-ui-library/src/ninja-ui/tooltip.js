import './styles/tooltip.css'; //it is enough to have css styles for this class

class Tooltip {
    constructor(element){
        this.element = element;
        this.message = element.getAttribute('data-message')
    }
    init(){
        const tip = document.createElement('div')
        tip.classList.add('tip')
        tip.textContent = this.message
        this.element.appendChild(tip)

        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active')
        })

        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active')
        })
    }
}

export default Tooltip