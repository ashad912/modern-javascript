const clock = document.querySelector('.clock')

const adjustDisplay = (number) => {
    if(number < 10){
        return `0${number}`
    }
    return `${number}`
}


const tick = () => {
    const now = new Date()

    const h = adjustDisplay(now.getHours())
    const m = adjustDisplay(now.getMinutes())
    const s = adjustDisplay(now.getSeconds())

    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
    `

    clock.innerHTML = html;
}


setInterval(tick, 1000)