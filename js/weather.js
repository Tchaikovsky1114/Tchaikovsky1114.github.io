

const API_KEY = "8c46d32c55f14070281620025d9e1d7c";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector('#weather span:first-child');
        const temp = document.querySelector("#temp");
        const weather = document.querySelector('#weather span:last-child');
        weather.innerText = `날씨 : ${data.weather[0].main} `;
        city.innerText = `${data.name}`;
        temp.innerText = `온도 : ${Math.round(data.main.temp)}도`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
