class Forecast {
    constructor(){
        this.key = 'wQZQJ5KIONkAezKp10307rmJGc2mlKrz'
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }

    getCity = async(city) => {
        const query = `?apikey=${this.key}&q=${city}`

        const res = await fetch(this.cityURI + query)
        const data = await res.json()
    
        return data[0]
    }

    getWeather = async(id) => {
        const query = `${id}?apikey=${this.key}`

        const res = await fetch(this.weatherURI + query)
        const data = await res.json()

        return data[0]
    }
}

const key = 'wQZQJ5KIONkAezKp10307rmJGc2mlKrz'

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const res = await fetch(base + query)
    const data = await res.json()

    return data[0]
}

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const res = await fetch(base + query)
    const data = await res.json()

    return data[0]

}

// fetching api data test
// getCity('lodz')
//     .then(data => {
//         console.log(data)
//         return getWeather(data.Key)
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(e => console.log(e))