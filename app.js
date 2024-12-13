const apiKey = "dd47e52fb40fa92f17e3c16320ef50dc&";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    
    const city = document.querySelector('.city').textContent = data.name;
    const temp = document.querySelector('.temp').textContent = Math.round(data.main.temp )+ "°C";
    const humidity = document.querySelector('.humidity').textContent = data.main.humidity + "%";
    const wind = document.querySelector('.wind').textContent = data.wind.speed + "km/h";

    if(data.weather[0].main == 'Clouds'){

        weatherIcon.src = './img/clouds.png';

    }
    else if(data.weather[0].main == 'Clear'){
        
        weatherIcon.src = './img/clear.png';
    }
    else if(data.weather[0].main == 'Drizzle')
        {
        weatherIcon.src = './img/drizzle.png';
    }
    else if(data.weather[0].main == 'Rain')
        {
        weatherIcon.src = './img/Rain.png';
    }
    else if(data.weather[0].main == 'Mist')
        {
        weatherIcon.src = './img/Rain.png';
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value.trim());
})

