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