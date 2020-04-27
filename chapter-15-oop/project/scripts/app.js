const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const forecast = new Forecast()

const updateUI = ({cityDets, weather}) => { //destructuring in param

    //const {weather, cityDets} = data //destructuring - can swap the order 
    console.log(cityDets, weather)

    details.innerHTML =  
    `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>    
    `

    //alternative by DOM functions
    // details.children[0].textContent = cityDets.EnglishName
    // details.children[1].textContent = weather.WeatherText
    // details.children[2].children[0].textContent = weather.Temperature.Metric.Value

    //third option is getting to by direct refrences...

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)

    const timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg' //ternary operator
    time.setAttribute('src', timeSrc)

    //remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
}


cityForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    //get city value
    const city = cityForm.city.value.trim()
    cityForm.reset()

    //update ui with new city
    forecast.updateCity(city)
        .then(data => {
            updateUI(data)
        })
        .catch(e => console.log(e))

    //set local storage
    localStorage.city = city

})

if(localStorage.city) { //can be undefined

    forecast.showArrayMethodContext()
    forecast.showNormalMethodContext()
    Forecast.showStaticArrayMethodContext() 
    Forecast.showStaticNormalMethodContext()
    
    forecast.updateCity(localStorage.city)
        .then(data => {
            updateUI(data)
        })
        .catch(e => console.log(e))
}