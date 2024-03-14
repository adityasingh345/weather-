const apikey = "cb4c280a77f2019752d1a949c640c176";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".navbar input");
const searchbtn = document.querySelector(".navbar #search");
const weathericn = document.querySelector(".weathericon");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "&#176C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windy").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clear") {
        weathericn.src = "clear.png";
    }
    else if(data.weather[0].main == "Clouds") {
        weathericn.src = "clouds.png";
    }
    else if(data.weather[0].main == "Rain") {
        weathericn.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle") {
        weathericn.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist") {
        weathericn.src = "mist.png";
    }
    else if(data.weather[0].main == "Snow") {
        weathericn.src = "snow.png";
    }
}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})