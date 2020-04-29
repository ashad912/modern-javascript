import "./styles/tabs.css"


//one listener version
class Tabs {
    constructor(container){
        this.container = container
        this.tabs = container.querySelector('.triggers')
    }
    init(){
        this.tabs.addEventListener('click', e => {
            //console.log(e.target) //if clicked to li gets li (event propagation)
            if(e.target.tagName === "LI"){
                this.toggleTabs(e)
                this.toggleContent(e)
            }          
        }) 
    }
    toggleTabs(e){
        this.tabs.querySelectorAll('.trigger').forEach(tab => tab.classList.remove('active'))
        e.target.classList.add('active')
    }

    toggleContent(e){
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active')
        })
        //add new active vlass to element
        const selector = e.target.getAttribute('data-target')
        const content = this.container.querySelector(selector)
        content.classList.add('active')


    }
}

//original

// class Tabs {
//     constructor(container){
//         this.container = container
//         this.tabs = container.querySelectorAll('.trigger')
//     }
//     init(){
//         this.tabs.forEach((tab) => {
//             tab.addEventListener('click', e => {
//                 this.toggleTabs(e)
//                 this.toggleContent(e)
//             })
//         })
//     }
//     toggleTabs(e){
//         this.tabs.forEach(tab => tab.classList.remove('active'))
//         e.target.classList.add('active')
//     }

//     toggleContent(e){
//         this.container.querySelectorAll('.content').forEach(item => {
//             item.classList.remove('active')
//         })
//         //add new active vlass to element
//         const selector = e.target.getAttribute('data-target')
//         const content = this.container.querySelector(selector)
//         content.classList.add('active')


//     }
// }

export default Tabs