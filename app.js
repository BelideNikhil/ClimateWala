var input=document.querySelector("#inputBox")
var check=document.querySelector("#btn")
var error_display=document.querySelector("error-disp")

const api="ea0d04be80b8d7c253bebd7033d43b6b";
var today = new Date();
// copy pasted below line which converts numeric date to string date
const options={year: 'numeric', month: 'long', day: 'numeric' }
document.querySelector("#date").innerHTML = today.toLocaleDateString('en-US',options);



var current_location=document.querySelector("#location")
var current_country=document.querySelector("#country")
var current_weather=document.querySelector("#weather")
var current_temperature=document.querySelector("#temperature")
var current_speed=document.querySelector("#speed")
var min_temp=document.querySelector("#max-temp")
var max_temp=document.querySelector("#min-temp")
var humidity=document.querySelector("#humidity")


// function farenheit(){
//     sourceURL="http://api.openweathermap.org/data/2.5/weather?q="+input.value+"&units=imperial&appid="+api
// }

function errorHandler(error) {
    console.log("error occured", error);
    current_location.innerText="Inexistent"
}

check.addEventListener('click', function(){
    var sourceURL="https://api.openweathermap.org/data/2.5/weather?q="+input.value+"&units=metric&appid="+api

    fetch(sourceURL).then(response=>response.json()).then(json=>{
    current_location.innerText=json.name;
    current_country.innerText=json.sys.country;
    current_weather.innerText=json.weather[0].description;
    current_temperature.innerText=json.main.temp+"°C";
    min_temp.innerText=json.main.temp_min+"°C";
    max_temp.innerText=json.main.temp_max+"°C";
    current_speed.innerText=json.wind.speed +"km/h";
    humidity.innerText=json.main.humidity+"%";
    })
    .catch(errorHandler),1500;
})


