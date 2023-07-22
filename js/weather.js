
/**
 * weather.js: display weather on the screen
 * @author DoungukKim
 * @since 7/21/2023
 * @version v0.0.1
 */

//api from open weather
const API_KEY=${{secrets.OPEN_WEATHER_API_KEY}};
function onGeoGo(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    console.log(lat, lon);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response =>response.json()).then(data=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");

        city.innerText=data.name;
        weather.innerText= `${data.weather[0].main} / ${data.main.temp}`;
    });

}


function onGeoError(){
    alert("can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoGo,onGeoError);