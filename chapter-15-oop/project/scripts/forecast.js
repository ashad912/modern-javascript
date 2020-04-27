class Forecast {
    constructor(){
        this.key = 'wQZQJ5KIONkAezKp10307rmJGc2mlKrz'
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }

    async updateCity(city){
        console.log(this)
        const cityDets = await this.getCity(city) //can call because in index.html, forecast.js is invoke earlier
        const weather = await this.getWeather(cityDets.Key)
    
        return {cityDets, weather}   
    }

    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`

        const res = await fetch(this.cityURI + query)
        const data = await res.json()
    
        return data[0]
    }

    async getWeather(id){
        const query = `${id}?apikey=${this.key}`

        const res = await fetch(this.weatherURI + query)
        const data = await res.json()

        return data[0]
    }

    showArrayMethodContext = async () => {
        console.log(this) //the same context, not changed - destructruring will not destroy the context
    }

    async showNormalMethodContext(){
        console.log(this) //the same context, however was changed (overwritten) - destructruring will destroy the context
    }

    static showStaticArrayMethodContext = async () => {
        console.log(this) // this for static methods log class code ?? :D
    }

    static async showStaticNormalMethodContext(){
        console.log(this) // this for static methods log class code ?? :D <- the same
    }
}

