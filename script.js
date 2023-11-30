const apiKey = "apiKey"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.getElementById("search-input")
const searchBtn = document.getElementById("search-button")
const weatherIcon = document.getElementById("weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        document.getElementById("error").style.display = "block"
        document.getElementById("weather").style.display = "none"
    } else {
        let data = await response.json()

        document.getElementById("city").innerHTML = data.name
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.getElementById("humidity").innerHTML = data.main.humidity + "%"
        document.getElementById("wind").innerHTML = Math.round(data.wind.speed) + " km/h"

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "Images/clouds.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "Images/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Images/drizzle.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "Images/clear.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "Images/mist.png"
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "Images/snow.png"
        }
        document.getElementById("weather").style.display = "block"
        document.getElementById("error").style.display = "none"
    }
}

searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value)
})
searchBox.addEventListener("submit", function () {
    checkWeather(searchBox.value)
})
