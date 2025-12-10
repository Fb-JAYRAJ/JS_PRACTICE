// Simple Weather App using OpenWeather API

const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherResult = document.getElementById("weatherResult");

const apiKey = "YOUR_API_KEY"; // put your API key here

getWeatherBtn.addEventListener("click", function() {
    const city = cityInput.value.trim();

    if (city === "") {
        weatherResult.textContent = "Please enter a city name";
        return;
    }

    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apiKey;

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.cod !== 200) {
                weatherResult.textContent = "City not found";
                return;
            }

            const temp = data.main.temp;
            const desc = data.weather[0].description;

            weatherResult.textContent =
                "Temperature: " + temp + "°C, " + desc;
        })
        .catch(function() {
            weatherResult.textContent = "Something went wrong";
        });
});