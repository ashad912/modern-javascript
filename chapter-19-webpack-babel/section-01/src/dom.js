console.log('dom file')

//single export
export const body = document.querySelector('body')

const styleBody = () => {
    body.style.background = 'peachpuff'
}

const addTitle = (text) => {
    const title = document.createElement('h1')
    title.textContent = text;
    body.appendChild(title)
}

const contact = 'mario@thenetninja.co.uk'

//minimalized export
export {styleBody, addTitle, contact}